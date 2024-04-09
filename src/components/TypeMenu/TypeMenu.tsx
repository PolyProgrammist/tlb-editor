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
	} = useContext(AppContext);

	const handleTypeChange = async (value = '') => {
		setSelectedType(value);
		if (!value) {
			return;
		}

		const tree = ast(tlbSchema);
		let tlbCode = getTLBCodeByAST(tree, tlbSchema);

		let humanReadableJson = await getDefaulHumanJsonUnsafe(
			tlbCode,
			tlbCode.types.get(value)!
		);

		humanReadableJson = JSON.stringify(
			humanReadableJson,
			(_, value) => (typeof value === 'bigint' ? value.toString() : value),
			'\t'
		);

		// reload humanReadableJson so that it becomes valid
		const currentModule = module;
		humanReadableJson = JSON.parse(humanReadableJson);
		let base64 = await humanJsonToBase64(
			humanReadableJson['kind'],
			tlbCode,
			humanReadableJson,
			currentModule[`store${value}`]
		);

		humanReadableJson = await base64ToHumanJson(
			base64,
			currentModule[`load${value}`]
		);

		setJsonData(
			JSON.stringify(
				humanReadableJson,
				(_, value) => (typeof value === 'bigint' ? value.toString() : value),
				'\t'
			)
		);

		let data = await humanJsonToBase64(
			humanReadableJson['kind'],
			tlbCode,
			humanReadableJson,
			//@ts-ignore
			currentModule[`store${value}`]
		);

		setBase64(data);
	};

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
