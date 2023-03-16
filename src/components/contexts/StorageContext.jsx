import React, { useContext, useState, createContext } from 'react';
import uniqid from 'uniqid';

const StorageContext = createContext();
const SetStorageContext = createContext();
const AppendFolderContext = createContext();
const DeleteFolderContext = createContext();
const AppendTaskContext = createContext();

export const useStorage = () => useContext(StorageContext);
export const useSetStorage = () => useContext(SetStorageContext);
export const useAppendFolder = () => useContext(AppendFolderContext);
export const useDeleteFolder = () => useContext(DeleteFolderContext);
export const useAppendTask = () => useContext(AppendTaskContext);

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

	function appendTask(id, { title, description }) {
		setStorage((prev) => {
			return prev.map((folder) => {
				if (folder.id === id) {
					folder.tasks = [
						...folder.tasks,
						{
							title: title,
							description: description,
							id: uniqid(),
						},
					];
				}
				return folder;
			});
		});
	}

	return (
		<StorageContext.Provider value={storage}>
			<SetStorageContext.Provider value={setStorage}>
				<AppendFolderContext.Provider value={appendFolder}>
					<DeleteFolderContext.Provider value={deleteFolder}>
						<AppendTaskContext.Provider value={appendTask}>
							{children}
						</AppendTaskContext.Provider>
					</DeleteFolderContext.Provider>
				</AppendFolderContext.Provider>
			</SetStorageContext.Provider>
		</StorageContext.Provider>
	);
};
