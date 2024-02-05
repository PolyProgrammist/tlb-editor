import React from 'react';

import { Box, Flex } from '@chakra-ui/react';
import Editor from '@monaco-editor/react';

export const Main: React.FC = () => {
	return (
		<Flex as="main" flexGrow={1}>
			<Flex flexDirection="column" flexGrow={1}>
				<Box flexGrow={2} bg="green">
					<Editor defaultLanguage="javascript" defaultValue="// some comment" />
				</Box>
				<Box flexGrow={1} bg="yellow">
					{' '}
					<Editor defaultLanguage="javascript" defaultValue="// some comment" />
				</Box>
			</Flex>
			<Box flexGrow={1} bg="red">
				<Editor defaultLanguage="javascript" defaultValue="// some comment" />
			</Box>
			<Box flexGrow={1} bg="blue">
				<Editor defaultLanguage="javascript" defaultValue="// some comment" />
			</Box>
		</Flex>
	);
};
