import React, { PropsWithChildren, useState } from 'react';

import { IAppContext } from './types';

export const AppContext = React.createContext<IAppContext>({} as IAppContext);

export const AppContextProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [tlbSchema, setTlbSchema] = useState<string>('');
	const [tlbError, setTlbError] = useState<string>('');
	const [code, setCode] = useState<string>('');
	const [serializedData, setSerializedData] = useState<string>('');
	const [serializedDataError, setSerializedDataError] = useState<string>('');
	const [jsonData, setJsonData] = useState<string>('');
	const [types, setTypes] = useState<string[]>([]);

	return (
		<AppContext.Provider
			value={{
				types,
				setTypes,
				tlbSchema,
				setTlbSchema,
				code,
				setCode,
				serializedData,
				setSerializedData,
				serializedDataError,
				setSerializedDataError,
				jsonData,
				setJsonData,
				tlbError,
				setTlbError,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
