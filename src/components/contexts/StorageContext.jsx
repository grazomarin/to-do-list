import React, { useContext, useState } from 'react';
import uniqid from 'uniqid';

const StorageContext = React.createContext();
const SetStorageContext = React.createContext();
const AppendFolderContext = React.createContext();

export const useStorage = () => useContext(StorageContext);
export const useSetStorage = () => useContext(SetStorageContext);
export const useAppendFolder = () => useContext(AppendFolderContext);

export const StorageProvider = ({ children }) => {
	const [storage, setStorage] = useState([
		{ name: 'Index', tasks: [], active: true, id: uniqid() },
	]);

	function appendFolder(title) {
		setStorage((prev) => {
			return [
				...prev,
				{ name: title, tasks: [], active: true, id: uniqid() },
			];
		});
	}

	return (
		<StorageContext.Provider value={storage}>
			<SetStorageContext.Provider value={setStorage}>
				<AppendFolderContext.Provider value={appendFolder}>
					{children}
				</AppendFolderContext.Provider>
			</SetStorageContext.Provider>
		</StorageContext.Provider>
	);
};
