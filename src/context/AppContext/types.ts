export interface IAppContext {
	tlbSchema: string;
	setTlbSchema: React.Dispatch<React.SetStateAction<string>>;
	tlbError: string;
	setTlbError: React.Dispatch<React.SetStateAction<string>>;
	code: string;
	setCode: React.Dispatch<React.SetStateAction<string>>;
	serializedData: string;
	setSerializedData: React.Dispatch<React.SetStateAction<string>>;
	serializedDataError: string;
	setSerializedDataError: React.Dispatch<React.SetStateAction<string>>;
	jsonData: string;
	setJsonData: React.Dispatch<React.SetStateAction<string>>;
}
