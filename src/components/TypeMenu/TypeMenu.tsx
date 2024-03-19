import React, { useContext } from 'react';

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { AppContext } from '@/context/AppContext';
// import { debounce } from 'lodash';

import { getDefaulHumanJson } from '@/tlbutils';
import { getTLBCodeByAST } from '@/tlbutils';
import { ast } from '@ton-community/tlb-parser';


export const TypeMenu: React.FC = () => {

	const { types, tlbSchema, tlbError, selectedType, setSelectedType, setJsonData } =
		useContext(AppContext);

	const handleTlbChange = async (value = '')  => {
		setSelectedType(value)
		const tree = ast(tlbSchema);
		let tlbCode = getTLBCodeByAST(tree, tlbSchema);
		let humanReadableJson = await getDefaulHumanJson(tlbCode, tlbCode.types.get(value)!);
		setJsonData(
			JSON.stringify(
				humanReadableJson,
				(_, value) => (typeof value === 'bigint' ? value.toString() : value),
				'\t'
			)
		);
	};

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
					<MenuItem key={type} onClick={() => handleTlbChange(type)}>
						{type}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};
