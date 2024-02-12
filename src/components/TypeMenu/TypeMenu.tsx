import React, { useContext } from 'react';

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { AppContext } from '@/context/AppContext';

export const TypeMenu: React.FC = () => {
	const { types, tlbSchema, tlbError, selectedType, setSelectedType } =
		useContext(AppContext);
	return (
		<Menu placement={'bottom'}>
			<MenuButton
				minW={'10rem'}
				as={Button}
				alignSelf={'center'}
				isDisabled={!tlbSchema || Boolean(tlbError)}
				mb={3}
			>
				{selectedType || 'Types'}
			</MenuButton>
			<MenuList maxHeight={'10rem'} overflow={'scroll'}>
				{types.map((type) => (
					<MenuItem key={type} onClick={() => setSelectedType(type)}>
						{type}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};
