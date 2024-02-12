import React, { useContext } from 'react';

import { Box, BoxProps, Flex, Spinner, Text } from '@chakra-ui/react';
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
	return (
		<Flex
			{...props}
			flexShrink={0}
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
			{header}

			<Flex position={'relative'} flexGrow={1}>
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
			</Flex>

			{footer}
			{errorMessage && (
				<Text mt={'-2.5rem'} zIndex={100} bg={'#ef5350'} px={6} color={'white'}>
					{errorMessage}
				</Text>
			)}
		</Flex>
	);
};
