import React, { useContext } from 'react';

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ast } from '@ton-community/tlb-parser';

import { AppContext } from '@/context/AppContext';
import {
	base64ToHumanJson,
	getDefaulHumanJsonUnsafe,
	getTLBCodeByAST,
	humanJsonToBase64,
} from '@/tlbutils';

export const TypeMenu: React.FC = () => {
	const {
		types,
		tlbSchema,
		module,
		tlbError,
		selectedType,
		setSelectedType,
		setJsonData,
		setBase64,
		handleTypeChange,
	} = useContext(AppContext);

	return (
		<Menu placement={'bottom'}>
			<MenuButton
				minW={'10rem'}
				as={Button}
				alignSelf={'center'}
				isDisabled={!tlbSchema || Boolean(tlbError)}
				size={'sm'}
			>
				{selectedType || 'Types'}
			</MenuButton>
			<MenuList maxHeight={'10rem'} overflow={'scroll'}>
				{types.map((type) => (
					<MenuItem key={type} onClick={() => handleTypeChange(type)}>
						{type}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};
