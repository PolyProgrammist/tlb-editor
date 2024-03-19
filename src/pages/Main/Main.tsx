import React, { useCallback, useContext, useEffect } from 'react';

import { debounce } from 'lodash';
import LZString from 'lz-string';
import { useSearchParams } from 'react-router-dom';
import * as ts from 'typescript';
import { Flex, Text } from '@chakra-ui/react';
import { ast } from '@ton-community/tlb-parser';
import { OnChange } from '@monaco-editor/react';
import {
	generateCodeByAST,
	TypescriptGenerator,
	// @ts-ignore
} from '@/tlbutils';

import { Editor } from '@/components/Editor';
import { SerializedDataTypeTab } from '@/components/SerializedDataTypeTab';
import { TypeMenu } from '@/components/TypeMenu';
import { AppContext } from '@/context/AppContext';
import { fromBase64, getTLBCodeByAST, toBase64 } from '@/tlbutils';

import { base64ToHex, hexToBase64 } from './utils';

let generator: TypescriptGenerator;
let getGenerator = (tlbCode: any) => {
	generator = new TypescriptGenerator(tlbCode);
	return generator;
};

const dummyEvent = {
	changes: [],
	eol: '\n',
	versionId: 0,
	isUndoing: false,
	isRedoing: false,
	isFlush: false,
	isEolChange: false,
};

export const Main: React.FC = () => {
	const {
		tlbSchema,
		setTlbSchema,
		code,
		jsonData,
		setJsonData,
		setCode,
		isCodeLoading,
		setIsCodeLoading,
		tlbError,
		setTlbError,
		serializedDataError,
		setSerializedDataError,
		setTypes,
		setModule,
		module,
		isSerializedDataLoading,
		isJsonDataLoading,
		setIsSerializedDataLoading,
		selectedType,
		setSelectedType,
		selectedSerializedDataType,
		setIsJsonDataLoading,
		jsonDataError,
		setJsonDataError,
		base64,
		setBase64,
		hex,
		setHex,
		setLastEdited,
		lastEdited,
	} = useContext(AppContext);

	const [searchParams] = useSearchParams();

	const serializedDataHandler = async (
		value = '',
		type = '',
		newModule?: {}
	) => {
		try {
			if (selectedSerializedDataType === 'base64') {
				setBase64(value);
				const newHex = base64ToHex(value);
				setHex(newHex);
			} else {
				setHex(value);
				const newBase64 = hexToBase64(value);
				setBase64(newBase64);

				value = newBase64;
			}

			if (value === '') {
				console.log('empty');
				setJsonData('');
				setIsJsonDataLoading(false);
				return;
			}

			type = type || selectedType;
			if (!type) {
				return;
			}

			// const cs = Cell.fromBase64(value);
			// const slice = cs.beginParse();

			const currentModule: {} = Object.keys(module).length
				? module
				: newModule || {};
			//@ts-ignore
			let ft = currentModule[`load${type}`];
			
			// console.log('hueta')

			// console.log(value, ft)

			const json = await fromBase64(value, ft)//(slice);
			console.log('hehey', json)
			setJsonData(
				JSON.stringify(
					json,
					(_, value) => (typeof value === 'bigint' ? value.toString() : value),
					'\t'
				)
			);
			setSerializedDataError('');
			setLastEdited('serialized');
		} catch (error) {
			console.error(error);
			setSerializedDataError('Data is invalid');
		} finally {
			setIsJsonDataLoading(false);
		}
	};

	const handleSerializedDataChangeDebounced: OnChange = useCallback(
		debounce((value) => serializedDataHandler(value), 1000),
		[serializedDataHandler]
	);

	const handleSerializedDataChange: OnChange = useCallback(
		(value, model) => {
			setIsJsonDataLoading(true);

			handleSerializedDataChangeDebounced(value, model);
		},
		[handleSerializedDataChangeDebounced, setIsJsonDataLoading]
	);

	const jsonHandler = async (value = '', type = '', newModule?: {}) => {
		try {
			console.log('json change');
			setJsonData(value);

			if (!value) {
				setHex('');
				setBase64('');
				return;
			}

			type = type || selectedType;
			if (!type) {
				return;
			}

			console.log("logging value", JSON.parse(value));

			// export async function toBase64(typeName: string, tlbCode: TLBCode, json: any, method: any) {


			const currentModule = module || newModule;
			// let data =
			// 	currentModule[`store${type}`](JSON.parse(value))(builder) || '';

			const tree = ast(tlbSchema);
			let tlbCode = getTLBCodeByAST(tree, tlbSchema);
			let data = await toBase64(type, tlbCode, JSON.parse(value), currentModule[`store${type}`]);
			
			// data = builder.endCell().toBoc().toString('base64');
			// { "kind": "BitSelection", "a": 5,
			// "b": 5 }

			setBase64(data);
			setHex(base64ToHex(data));

			setJsonDataError('');
			setLastEdited('json');
		} catch (error) {
			console.error(error);
			setJsonDataError('Data is invalid');
		} finally {
			setIsSerializedDataLoading(false);
		}
	};

	const handleJsonDataChangeDebounced: OnChange = useCallback(
		debounce((value) => jsonHandler(value), 1000),
		[jsonHandler]
	);

	const handleJsonDataChange: OnChange = useCallback(
		(value, model) => {
			setIsSerializedDataLoading(true);

			handleJsonDataChangeDebounced(value, model);
		},
		[handleJsonDataChangeDebounced, setIsSerializedDataLoading]
	);

	const tlbHandler = async (value = '') => {
		console.log('change tlb change');
		try {
			setTlbSchema(value);
			if (!value) {
				setCode('');
				return;
			}
			setIsCodeLoading(true);
			const tree = ast(value);
			const newCode = generateCodeByAST(tree, value, getGenerator);

			setTypes(
				[...generator.tlbCode.types.keys()]
					.filter(
						(type: string) =>
							generator.tlbCode.types.get(type).constructors[0]?.parameters
								.length === 0
					)
					.sort()
			);
			setCode(newCode);

			const jsCode = ts
				.transpile(newCode, { target: 2 })
				.replace(/import { ([^}]+) } from '@ton\/core';/g, '');
			const blob = new Blob([jsCode], {
				type: 'application/javascript; charset=utf-8',
			});

			const scriptURL = URL.createObjectURL(blob);

			const newModule = await import(scriptURL);
			setModule(newModule);

			setTlbError('');

			setIsCodeLoading(false);

			if (lastEdited === 'serialized') {
				console.log('start regenerate srialized');
				if (
					(selectedSerializedDataType === 'base64' && !base64) ||
					(selectedSerializedDataType === 'hex' && !hex)
				) {
					return newModule;
				}
				handleSerializedDataChange(
					selectedSerializedDataType === 'base64' ? base64 || '' : hex || '',
					dummyEvent
				);
			} else {
				handleJsonDataChange(jsonData, dummyEvent);
			}

			return newModule;
		} catch (error) {
			console.error(error);
			setCode('');
			setTlbError('Scheme is incorrect');
		} finally {
			setIsCodeLoading(false);
		}
	};

	const handleTlbChangeDebounced: OnChange = useCallback(
		debounce(tlbHandler, 1000),
		[tlbHandler]
	);

	const handleTlbChange: OnChange = useCallback(
		async (value, model) => {
			setIsCodeLoading(true);

			await handleTlbChangeDebounced(value, model);
		},
		[handleTlbChangeDebounced, setIsCodeLoading]
	);

	useEffect(() => {
		const parseState = async () => {
			const tlbState = LZString.decompressFromEncodedURIComponent(
				searchParams.get('tlb') || ''
			);
			const jsonState = LZString.decompressFromEncodedURIComponent(
				searchParams.get('json') || ''
			);
			const base64State = LZString.decompressFromEncodedURIComponent(
				searchParams.get('base64') || ''
			);
			const typeState = LZString.decompressFromEncodedURIComponent(
				searchParams.get('type') || ''
			);
			setTlbSchema(tlbState);
			setIsCodeLoading(true);
			const module = await tlbHandler(tlbState);

			console.log('module', module);

			setSelectedType(typeState);
			setBase64(base64State);

			if (typeState) {
				console.log("typestate is: ", typeState)
			}

			if (base64State) {
				console.log(base64State)
				await serializedDataHandler(base64State, typeState, module);
			} else if (jsonState) {
				console.log(jsonState)
				await jsonHandler(jsonState, typeState, module);
			}
		};

		parseState();

		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams]);
	return (
		<Flex as="main" flexGrow={1} gap={5}>
			<Flex flexDirection="column" flexGrow={1} gap={5}>
				<Editor
					header={<Text>TLB Schema</Text>}
					flexGrow={2}
					defaultLanguage="tlb"
					value={tlbSchema}
					onChange={handleTlbChange}
					options={{
						minimap: { enabled: false },
					}}
					footer={<TypeMenu />}
					errorMessage={tlbError}
					fileName={'scheme.tlb'}
				/>

				<Editor
					header={<SerializedDataTypeTab />}
					flexGrow={1}
					isLoading={isSerializedDataLoading}
					value={selectedSerializedDataType === 'base64' ? base64 : hex}
					options={{
						minimap: { enabled: false },
						readOnly: !tlbSchema || Boolean(tlbError) || !selectedType,
					}}
					errorMessage={serializedDataError}
					onChange={handleSerializedDataChange}
					fileName={'serialized.txt'}
				/>
			</Flex>

			<Editor
				isLoading={isJsonDataLoading}
				header={<Text>JSON</Text>}
				flexGrow={1}
				defaultLanguage="json"
				value={jsonData}
				errorMessage={jsonDataError}
				options={{
					minimap: { enabled: false },
					readOnly: !tlbSchema || Boolean(tlbError) || !selectedType,
				}}
				onChange={handleJsonDataChange}
				fileName={'deserialized.json'}
			/>

			<Editor
				isLoading={isCodeLoading}
				header={<Text>Code</Text>}
				flexGrow={1}
				defaultLanguage="typescript"
				value={code}
				options={{
					minimap: { enabled: false },
					readOnly: true,
				}}
				fileName={'code.ts'}
			/>
		</Flex>
	);
};
