import React, { useState } from 'react';

import * as ts from 'typescript';
import { Box, Flex } from '@chakra-ui/react';
import { ast } from '@igorivaniuk/tlb-parser';
import Editor, { OnChange, useMonaco } from '@monaco-editor/react';
import {
	generateCodeByAST,
	TypescriptGenerator,
	// @ts-ignore
} from '@polyprogrammist_test/tlbgen/build';

let getGenerator = (tlbCode: any) => {
	return new TypescriptGenerator(tlbCode);
};

export const Main: React.FC = () => {
	const [tlbSchema, setTlbSchema] = useState<string>('');
	const [code, setCode] = useState<string>('');
	const [serializedData, setSerializedData] = useState<string>('');
	const [jsonData, setJsonData] = useState<string>('');

	const handleTlbChange: OnChange = (value = '') => {
		setTlbSchema(value);

		const tree = ast(value);

		setCode(generateCodeByAST(tree, value, getGenerator));
	};

	const handleSerializedDataChange: OnChange = async (value = '') => {
		setSerializedData(value);

		const jsCode = ts
			.transpile(code, { target: 2 })
			.replace(/import { ([^}]+) } from 'ton';/g, '');
		const blob = new Blob([jsCode], {
			type: 'application/javascript; charset=utf-8',
		});

		const scriptURL = URL.createObjectURL(blob);
		const ton = await import('ton');

		const { beginCell, Dictionary, Builder, Slice, BitString, Cell, Address } =
			ton;

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
				(key, value) => (typeof value === 'bigint' ? value.toString() : value), // return everything else unchanged
				'\t'
			)
		);
		// console.log(JSON.stringify(json));
	};

	return (
		<Flex as="main" flexGrow={1}>
			<Flex flexDirection="column" flexGrow={1}>
				<Box flexGrow={2}>
					<Editor
						defaultLanguage="javascript"
						value={tlbSchema}
						onChange={handleTlbChange}
						options={{
							minimap: { enabled: false },
						}}
					/>
				</Box>
				<Box flexGrow={1}>
					<Editor
						value={serializedData}
						options={{
							minimap: { enabled: false },
						}}
						onChange={handleSerializedDataChange}
					/>
				</Box>
			</Flex>
			<Box flexGrow={1}>
				<Editor
					defaultLanguage="json"
					value={jsonData}
					options={{
						minimap: { enabled: false },
					}}
					onChange={(v) => setJsonData(v || '')}
				/>
			</Box>
			<Box flexGrow={1}>
				<Editor
					defaultLanguage="typescript"
					value={code}
					options={{
						minimap: { enabled: false },
						readOnly: true,
					}}
				/>
			</Box>
		</Flex>
	);
};
