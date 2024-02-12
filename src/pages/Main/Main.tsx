import React, { useCallback, useContext } from 'react';

import { debounce } from 'lodash';
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
import { TypeMenu } from '@/components/TypeMenu';
import { AppContext } from '@/context/AppContext';

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
		serializedData,
		setSerializedData,
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
		setIsSerializedDataLoading,
		selectedType,
	} = useContext(AppContext);

	const handleTlbChange: OnChange = useCallback(
		async (value = '') => {
			try {
				setTlbSchema(value);
				if (!value) {
					setCode('');
					return;
				}
				setIsCodeLoading(true);
				const tree = ast(value);
				const newCode = generateCodeByAST(tree, value, getGenerator);

				setTypes([...generator.tlbCode.types.keys()]);
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
			} catch (error) {
				console.error(error);
				setCode('');
				setTlbError('Scheme is incorrect');
			} finally {
				setIsCodeLoading(false);
			}
		},
		[setCode, setTlbError, setTlbSchema, setTypes, setModule, setIsCodeLoading]
	);

	const handleTlbChangeDebounced: OnChange = useCallback(
		(value, model) => {
			setIsCodeLoading(true);
			debounce(handleTlbChange, 1000)(value, model);
		},
		[handleTlbChange, setIsCodeLoading]
	);

	const handleSerializedDataChange: OnChange = useCallback(
		async (value = '') => {
			try {
				setSerializedData(value);

				const ton = await import('ton');

				const {
					beginCell,
					Dictionary,
					Builder,
					Slice,
					BitString,
					Cell,
					Address,
				} = ton;

				(window as any).beginCell = beginCell;
				(window as any).Dictionary = Dictionary;
				(window as any).Builder = Builder;
				(window as any).Slice = Slice;
				(window as any).BitString = BitString;
				(window as any).Cell = Cell;
				(window as any).Address = Address;

				const cs = Cell.fromBase64(value);
				const slice = cs.beginParse();
				if (!selectedType) {
					return;
				}
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
			} catch (error) {
				console.error(error);
				setJsonData('');
				setSerializedDataError('Data is invalid');
			} finally {
				setIsSerializedDataLoading(false);
			}
		},
		[
			setJsonData,
			setSerializedData,
			setSerializedDataError,
			module,
			setIsSerializedDataLoading,
			selectedType,
		]
	);

	const handleSerializedDataChangeDebounced: OnChange = useCallback(
		(value, model) => {
			setIsSerializedDataLoading(true);
			debounce(handleSerializedDataChange, 1000)(value, model);
		},
		[handleSerializedDataChange, setIsSerializedDataLoading]
	);

	return (
		<Flex as="main" flexGrow={1} gap={5}>
			<Flex flexDirection="column" flexGrow={1} gap={5}>
				<Editor
					header={
						<Text ml={3} p={3}>
							TLB Schema
						</Text>
					}
					flexGrow={2}
					defaultLanguage="javascript"
					value={tlbSchema}
					onChange={handleTlbChangeDebounced}
					options={{
						minimap: { enabled: false },
					}}
					footer={<TypeMenu />}
					errorMessage={tlbError}
				/>

				<Editor
					header={
						<Text ml={3} p={3}>
							Base64
						</Text>
					}
					flexGrow={1}
					value={serializedData}
					options={{
						minimap: { enabled: false },
						readOnly: !tlbSchema || Boolean(tlbError),
					}}
					errorMessage={serializedDataError}
					onChange={handleSerializedDataChangeDebounced}
				/>
			</Flex>

			<Editor
				isLoading={isSerializedDataLoading}
				header={
					<Text ml={3} p={3}>
						JSON
					</Text>
				}
				flexGrow={1}
				defaultLanguage="json"
				value={jsonData}
				options={{
					minimap: { enabled: false },
					readOnly: !tlbSchema || Boolean(tlbError),
				}}
				onChange={(v) => setJsonData(v || '')}
			/>

			<Editor
				isLoading={isCodeLoading}
				header={
					<Text ml={3} p={3}>
						Code
					</Text>
				}
				flexGrow={1}
				defaultLanguage="typescript"
				value={code}
				options={{
					minimap: { enabled: false },
					readOnly: true,
				}}
			/>
		</Flex>
	);
};
