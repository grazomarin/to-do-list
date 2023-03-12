import React, { useContext, useState, createContext } from 'react';
import uniqid from 'uniqid';

const StorageContext = createContext();
const SetStorageContext = createContext();
const AppendFolderContext = createContext();
const DeleteFolderContext = createContext();

export const useStorage = () => useContext(StorageContext);
export const useSetStorage = () => useContext(SetStorageContext);
export const useAppendFolder = () => useContext(AppendFolderContext);
export const useDeleteFolder = () => useContext(DeleteFolderContext);

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

	function deleteFolder(id) {
		setStorage((prev) => {
			return prev.reduce((reduced, folder) => {
				if (folder.id !== id) reduced.push(folder);
				return reduced;
			}, []);
		});
	}

	return (
		<StorageContext.Provider value={storage}>
			<SetStorageContext.Provider value={setStorage}>
				<AppendFolderContext.Provider value={appendFolder}>
					<DeleteFolderContext.Provider value={deleteFolder}>
						{children}
					</DeleteFolderContext.Provider>
				</AppendFolderContext.Provider>
			</SetStorageContext.Provider>
		</StorageContext.Provider>
	);
};
