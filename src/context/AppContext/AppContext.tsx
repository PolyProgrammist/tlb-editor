import React, { PropsWithChildren, useState } from 'react';

import { IAppContext, SerializedDataType } from './types';

export const AppContext = React.createContext<IAppContext>({} as IAppContext);

export const AppContextProvider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [tlbSchema, setTlbSchema] = useState<string>('');
	const [tlbError, setTlbError] = useState<string>('');
	const [code, setCode] = useState<string>('');
	const [isCodeLoading, setIsCodeLoading] = useState<boolean>(false);
	const [base64, setBase64] = useState<string>('');
	const [hex, setHex] = useState<string>('');
	const [serializedDataError, setSerializedDataError] = useState<string>('');
	const [isSerializedDataLoading, setIsSerializedDataLoading] =
		useState<boolean>(false);
	const [jsonData, setJsonData] = useState<string>('');
	const [jsonDataError, setJsonDataError] = useState<string>('');
	const [isJsonDataLoading, setIsJsonDataLoading] = useState<boolean>(false);
	const [types, setTypes] = useState<string[]>([]);
	const [selectedType, setSelectedType] = useState<string>('');
	const [module, setModule] = useState<{}>({});
	const [selectedSerializedDataType, setSelectedSerializedDataType] =
		useState<SerializedDataType>('base64');

	return (
		<AppContext.Provider
			value={{
				isLoading,
				setIsLoading,
				types,
				setTypes,
				tlbSchema,
				setTlbSchema,
				base64,
				setBase64,
				hex,
				setHex,
				code,
				setCode,
				isCodeLoading,
				setIsCodeLoading,
				serializedDataError,
				setSerializedDataError,
				isSerializedDataLoading,
				setIsSerializedDataLoading,
				isJsonDataLoading,
				setIsJsonDataLoading,
				jsonData,
				setJsonData,
				jsonDataError,
				setJsonDataError,
				tlbError,
				setTlbError,
				selectedType,
				setSelectedType,
				setModule,
				module,
				selectedSerializedDataType,
				setSelectedSerializedDataType,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
