import React, { useCallback, useContext, useEffect } from 'react';

import { debounce } from 'lodash';
import LZString from 'lz-string';
import { useSearchParams } from 'react-router-dom';
import * as ts from 'typescript';
import { Flex, Text } from '@chakra-ui/react';
import { ast } from '@igorivaniuk/tlb-parser';
import { OnChange } from '@monaco-editor/react';
import {
	generateCodeByAST,
	TypescriptGenerator,
	// @ts-ignore
} from '@polyprogrammist_test/tlbgen/build';

import { Editor } from '@/components/Editor';
import { SerializedDataTypeTab } from '@/components/SerializedDataTypeTab';
import { TypeMenu } from '@/components/TypeMenu';
import { AppContext } from '@/context/AppContext';

import { base64ToHex, hexToBase64, importTonDependencies } from './utils';

let generator: TypescriptGenerator;
let getGenerator = (tlbCode: any) => {
	generator = new TypescriptGenerator(tlbCode);
	return generator;
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

	const handleSerializedDataChange: OnChange = useCallback(
		async (value = '') => {
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
					return;
				}

				const { Cell } = await importTonDependencies();

				if (!selectedType) {
					return;
				}

				const cs = Cell.fromBase64(value);
				const slice = cs.beginParse();

				const json = module[`load${selectedType}`](slice);
				setJsonData(
					JSON.stringify(
						json,
						(_, value) =>
							typeof value === 'bigint' ? value.toString() : value,
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
		},
		[
			setIsJsonDataLoading,
			setJsonData,
			setSerializedDataError,
			module,
			selectedType,
			selectedSerializedDataType,
			setBase64,
			setHex,
			setLastEdited,
		]
	);

	const handleSerializedDataChangeDebounced: OnChange = useCallback(
		debounce((value, model) => {
			setIsJsonDataLoading(true);

			handleSerializedDataChange(value, model);
		}, 1000),
		[handleSerializedDataChange, setIsJsonDataLoading]
	);

	const handleJsonDataChange: OnChange = useCallback(
		async (value = '') => {
			try {
				console.log('json change');
				setJsonData(value);

				if (!value) {
					setHex('');
					setBase64('');
					return;
				}

				const { beginCell } = await importTonDependencies();

				if (!selectedType) {
					return;
				}

				const builder = beginCell();

				console.log(JSON.parse(value));

				let data =
					module[`store${selectedType}`](JSON.parse(value))(builder) || '';

				data = builder.endCell().toBoc().toString('base64');
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
		},
		[
			setJsonData,
			setBase64,
			setHex,
			setJsonDataError,
			setIsSerializedDataLoading,
			module,
			selectedType,
			setLastEdited,
		]
	);

	const handleJsonDataChangeDebounced: OnChange = useCallback(
		debounce((value, model) => {
			setIsSerializedDataLoading(true);

			handleJsonDataChange(value, model);
		}, 1000),
		[handleJsonDataChange, setIsSerializedDataLoading]
	);

	const handleTlbChange: OnChange = useCallback(
		async (value = '', ev) => {
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
					.replace(/import { ([^}]+) } from 'ton';/g, '');
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
					handleSerializedDataChangeDebounced(
						selectedSerializedDataType === 'base64' ? base64 : hex,
						ev
					);
				} else {
					handleJsonDataChangeDebounced(jsonData, ev);
				}
			} catch (error) {
				console.error(error);
				setCode('');
				setTlbError('Scheme is incorrect');
			} finally {
				setIsCodeLoading(false);
			}
		},
		[
			setCode,
			setTlbError,
			setTlbSchema,
			setTypes,
			setModule,
			setIsCodeLoading,
			jsonData,
			base64,
			hex,
			lastEdited,
			handleJsonDataChangeDebounced,
			selectedSerializedDataType,
			handleSerializedDataChangeDebounced,
		]
	);

	const handleTlbChangeDebounced: OnChange = useCallback(
		debounce((value, model) => {
			setIsCodeLoading(true);
			handleTlbChange(value, model);
		}, 1000),
		[handleTlbChange, setIsCodeLoading]
	);

	useEffect(() => {
		const tlbState = LZString.decompressFromEncodedURIComponent(
			searchParams.get('state') || ''
		);

		const dummyEvent = {
			changes: [],
			eol: '\n',
			versionId: 0,
			isUndoing: false,
			isRedoing: false,
			isFlush: false,
			isEolChange: false,
		};

		handleTlbChangeDebounced(tlbState, dummyEvent);
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams]);
	return (
		<Flex as="main" flexGrow={1} gap={5}>
			<Flex flexDirection="column" flexGrow={1} gap={5}>
				<Editor
					header={<Text>TLB Schema</Text>}
					flexGrow={2}
					defaultLanguage="javascript"
					value={tlbSchema}
					onChange={handleTlbChangeDebounced}
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
					onChange={handleSerializedDataChangeDebounced}
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
				onChange={handleJsonDataChangeDebounced}
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
