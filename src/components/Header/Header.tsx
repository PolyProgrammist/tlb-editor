import React, { useContext } from 'react';

import LZString from 'lz-string';
import { Link, useLocation } from 'react-router-dom';
import { Button, Flex, Tab, TabList, Tabs } from '@chakra-ui/react';

import { AppContext } from '@/context/AppContext';
import { paths } from '@/router';

export const Header: React.FC = () => {
	const { tlbSchema, base64, jsonData, selectedType } = useContext(AppContext);

	const location = useLocation();

	const pathToTabIndex = {
		[paths.main]: 0,
		[paths.about]: 1,
	};

	const currentTabIndex = pathToTabIndex[location.pathname] || 0;

	const handleShareClick: React.MouseEventHandler<HTMLButtonElement> = () => {
		const queryParams = `tlb=${LZString.compressToEncodedURIComponent(
			tlbSchema
		)}&type=${LZString.compressToEncodedURIComponent(
			selectedType
		)}&base64=${LZString.compressToEncodedURIComponent(
			base64
		)}&json=${LZString.compressToEncodedURIComponent(jsonData)}`;

		// Construct the new URL with query parameters
		const newUrl = `${window.location.host}/#/main?${queryParams}`;

		// Copy the new URL to the clipboard
		navigator.clipboard
			.writeText(newUrl)
			.then(() => {
				console.log(console.log(newUrl));
			})
			.catch((err) => {
				console.error('Failed to copy URL: ', err);
			});
	};

	return (
		<Flex
			px={5}
			py={3}
			as={'header'}
			boxShadow={'rgba(114, 138, 150, 0.08) 0px 2px 16px'}
			background={'white'}
			border={'1px solid rgba(114, 138, 150, 0.24)'}
			justifyContent={'space-between'}
		>
			<Tabs index={currentTabIndex}>
				<TabList border={0}>
					<Tab as={Link} to={paths.main}>
						Main
					</Tab>
					<Tab as={Link} to={paths.about}>
						About
					</Tab>
				</TabList>
			</Tabs>

			<Button onClick={handleShareClick}> Share</Button>
		</Flex>
	);
};
