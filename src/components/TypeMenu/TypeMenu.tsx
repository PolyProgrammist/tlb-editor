import React, { useContext } from 'react';

import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { AppContext } from '@/context/AppContext';
import { base64ToHumanJson, getDefaulHumanJsonUnsafe, getTLBCodeByAST, humanJsonToBase64 } from '@/tlbutils';
import { ast } from '@ton-community/tlb-parser';


export const TypeMenu: React.FC = () => {

	const { types, tlbSchema, module, tlbError, selectedType, setSelectedType, setJsonData } =
		useContext(AppContext);

	const handleTlbChange = async (value = '')  => {
		setSelectedType(value)
		if (!value) {
			return;
		}

		const tree = ast(tlbSchema);
		let tlbCode = getTLBCodeByAST(tree, tlbSchema);
		let humanReadableJson = await getDefaulHumanJsonUnsafe(tlbCode, tlbCode.types.get(value)!);

		humanReadableJson = JSON.stringify(
			humanReadableJson,
			(_, value) => (typeof value === 'bigint' ? value.toString() : value),
			'\t'
		)

		// reload humanReadableJson so that it becomes valid
		const currentModule = module;
		humanReadableJson = JSON.parse(humanReadableJson);
		let base64 = await humanJsonToBase64(humanReadableJson['kind'], tlbCode, humanReadableJson, currentModule[`store${value}`]);
		humanReadableJson = await base64ToHumanJson(base64, currentModule[`load${value}`]);

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
