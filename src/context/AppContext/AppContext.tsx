import React, { PropsWithChildren, useEffect, useState } from 'react';

import { IAppContext } from './types';

export const AppContext = React.createContext<IAppContext>({} as IAppContext);

export const AppContextProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [tlbSchema, setTlbSchema] = useState<string>('');
	const [tlbError, setTlbError] = useState<string>('');
	const [code, setCode] = useState<string>('');
	const [isCodeLoading, setIsCodeLoading] = useState<boolean>(false);
	const [serializedData, setSerializedData] = useState<string>('');
	const [serializedDataError, setSerializedDataError] = useState<string>('');
	const [isSerializedDataLoading, setIsSerializedDataLoading] =
		useState<boolean>(false);
	const [jsonData, setJsonData] = useState<string>('');
	const [types, setTypes] = useState<string[]>([]);
	const [selectedType, setSelectedType] = useState<string>('');
	const [module, setModule] = useState<{}>({});

	return (
		<AppContext.Provider
			value={{
				types,
				setTypes,
				tlbSchema,
				setTlbSchema,
				code,
				setCode,
				isCodeLoading,
				setIsCodeLoading,
				serializedData,
				setSerializedData,
				serializedDataError,
				setSerializedDataError,
				isSerializedDataLoading,
				setIsSerializedDataLoading,
				jsonData,
				setJsonData,
				tlbError,
				setTlbError,
				selectedType,
				setSelectedType,
				setModule,
				module,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
