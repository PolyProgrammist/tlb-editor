import React from 'react';

import { Box, BoxProps, Button, Flex, Spinner, Text } from '@chakra-ui/react';
import {
	Editor as MonacoEditor,
	EditorProps as MonacoEditorProps,
} from '@monaco-editor/react';

import './Editor.css';

type EditorProps = Omit<BoxProps, 'onChange'> &
	MonacoEditorProps & {
		errorMessage?: string;
		header?: React.ReactElement;
		footer?: React.ReactElement;
		isLoading?: boolean;
	};

export const Editor: React.FC<EditorProps> = ({
	header,
	defaultLanguage,
	value,
	options,
	onChange,
	errorMessage,
	footer,
	isLoading = false,
	...props
}) => {
	const handleCopy = () => {
		navigator.clipboard
			.writeText(value || '')
			.then(() => {
				console.log('Text copied to clipboard');
			})
			.catch((err) => {
				console.error('Failed to copy text: ', err);
			});
	};

	return (
		<Flex
			{...props}
			flexShrink={0}
			position={'relative'}
			flexDirection={'column'}
			background={'white'}
			borderRadius={'1.5rem'}
			overflow={'hidden'}
			boxShadow={'rgba(114, 138, 150, 0.08) 0px 2px 16px'}
			border={
				errorMessage
					? '1px solid #ef5350'
					: '1px solid rgba(114, 138, 150, 0.24)'
			}
			boxSizing={'border-box'}
		>
			<Flex
				padding={1}
				justifyContent={'space-between'}
				mx={3}
				alignItems={'center'}
			>
				{header}{' '}
				<Box>
					<Button onClick={handleCopy} isDisabled={!Boolean(value)}>
						Copy
					</Button>
				</Box>
			</Flex>

			<Box position={'relative'} flexGrow={1}>
				{isLoading && (
					<Flex
						position={'absolute'}
						width={'100%'}
						height={'100%'}
						flexGrow={1}
						zIndex={100}
						bg={'white'}
						justifyContent={'center'}
						alignItems={'center'}
					>
						<Spinner />
					</Flex>
				)}
				<Flex height={'100%'} width={'100%'}>
					<MonacoEditor
						loading={
							<Flex
								justifyContent={'center'}
								alignItems={'center'}
								height={'100%'}
								width={'100%'}
							>
								<Spinner />
							</Flex>
						}
						defaultLanguage={defaultLanguage}
						value={value}
						onChange={onChange}
						options={{
							minimap: { enabled: false },
							...options,
						}}
					/>
				</Flex>
			</Box>

			{footer}
			{errorMessage && (
				<Text
					zIndex={100}
					bg={'#ef5350'}
					px={6}
					color={'white'}
					position={'absolute'}
					bottom={0}
				>
					{errorMessage}
				</Text>
			)}
		</Flex>
	);
};
