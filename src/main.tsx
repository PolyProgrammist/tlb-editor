import React from 'react';

import { Buffer } from 'buffer';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { AppContextProvider } from '@/context/AppContext';
import { router } from '@/router';

import './index.css';

(window as any).Buffer = Buffer;

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ChakraProvider>
			<AppContextProvider>
				<RouterProvider router={router} />
			</AppContextProvider>
		</ChakraProvider>
	</React.StrictMode>
);
