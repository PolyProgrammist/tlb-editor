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
		tlbError,
		setTlbError,
		serializedDataError,
		setSerializedDataError,
		setTypes,
	} = useContext(AppContext);

	const handleTlbChange: OnChange = useCallback(
		(value = '') => {
			try {
				setTlbSchema(value);
				if (!value) {
					setCode('');
					return;
				}
				const tree = ast(value);
				const newCode = generateCodeByAST(tree, value, getGenerator);

				setTypes([...generator.tlbCode.types.keys()]);
				setCode(newCode);
				setTlbError('');
			} catch (error) {
				console.error(error);
				setCode('');
				setTlbError('Scheme is incorrect');
			}
		},
		[setCode, setTlbError, setTlbSchema, setTypes]
	);

	const handleTlbChangeDebounced = useCallback(
		debounce(handleTlbChange, 1000),
		[handleTlbChange]
	);

	const handleSerializedDataChange: OnChange = useCallback(
		async (value = '') => {
			try {
				setSerializedData(value);

				const jsCode = ts
					.transpile(code, { target: 2 })
					.replace(/import { ([^}]+) } from 'ton';/g, '');
				const blob = new Blob([jsCode], {
					type: 'application/javascript; charset=utf-8',
				});

				const scriptURL = URL.createObjectURL(blob);
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

				const module = await import(scriptURL);

				const cs = Cell.fromBase64(value);
				const slice = cs.beginParse();
				const json = module['loadBlock'](slice);
				setJsonData(
					JSON.stringify(
						json,
						(_, value) =>
							typeof value === 'bigint' ? value.toString() : value,
						'\t'
					)
				);
				setSerializedDataError('Data is invalid');
			} catch (error) {
				setJsonData('');
				setSerializedDataError('Data is invalid');
			}
		},
		[code, setJsonData, setSerializedData, setSerializedDataError]
	);

	const handleSerializedDataChangeDebounced = useCallback(
		debounce(handleSerializedDataChange, 1000),
		[handleSerializedDataChange]
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
