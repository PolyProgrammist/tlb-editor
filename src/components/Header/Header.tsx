import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Flex, Tab, TabList, Tabs } from '@chakra-ui/react';

import { paths } from '@/router';

export const Header: React.FC = () => {
	const location = useLocation();

	const pathToTabIndex = {
		[paths.main]: 0,
		[paths.about]: 1,
	};

	const currentTabIndex = pathToTabIndex[location.pathname] || 0;

	// const handleShareClick: React.MouseEventHandler<HTMLButtonElement> = () => {
	// 	const queryParams = `state='; // Customize this

	// 	// Construct the new URL with query parameters
	// 	const newUrl = `${currentUrl}?${queryParams}`;

	// 	// Copy the new URL to the clipboard
	// 	navigator.clipboard
	// 		.writeText(newUrl)
	// 		.then(() => {
	// 			console.log('URL copied to clipboard!');
	// 			// Optionally, display a message to the user indicating success
	// 		})
	// 		.catch((err) => {
	// 			console.error('Failed to copy URL: ', err);
	// 			// Handle any errors (for example, Clipboard API might not be available)
	// 		});
	// };

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

			{/* <Button onClick={}> Share</Button> */}
		</Flex>
	);
};
