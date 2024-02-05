import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Tab, TabList, Tabs } from '@chakra-ui/react';

import { paths } from '@/router';

export const Header: React.FC = () => {
	const location = useLocation();

	const pathToTabIndex = {
		[paths.main]: 0,
		[paths.about]: 1,
	};

	const currentTabIndex = pathToTabIndex[location.pathname] || 0;

	return (
		<header>
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
		</header>
	);
};
