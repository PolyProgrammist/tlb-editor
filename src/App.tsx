import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';
import { AppContextProvider } from '@/context/AppContext';

import './App.css';

function App() {
	return (
		<AppContextProvider>
			<Header />
			<Outlet />
		</AppContextProvider>
	);
}

export default App;
