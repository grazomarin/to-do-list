import React, { useContext, useState, createContext } from 'react';
import uniqid from 'uniqid';

const StorageContext = createContext();
const AppendFolderContext = createContext();
const DeleteFolderContext = createContext();
const AppendTaskContext = createContext();
const DeleteTaskContext = createContext();

export const useStorage = () => useContext(StorageContext);
export const useAppendFolder = () => useContext(AppendFolderContext);
export const useDeleteFolder = () => useContext(DeleteFolderContext);
export const useAppendTask = () => useContext(AppendTaskContext);
export const useDeleteTask = () => useContext(DeleteTaskContext);

export const StorageProvider = ({ children }) => {
	const [storage, setStorage] = useState([
		{ title: 'Index', tasks: [], active: true, edit: false, id: uniqid() },
	]);

	function appendFolder(title) {
		setStorage((prev) => {
			return [
				...prev,
				{
					title: title,
					tasks: [],
					active: true,
					edit: false,
					id: uniqid(),
				},
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

	function appendTask(title, description) {
		setStorage((prev) => {
			return prev.map((folder) => {
				if (folder.active) {
					folder.tasks = [
						...folder.tasks,
						{
							title: title,
							description: description,
							completed: false,
							edit: false,
							id: uniqid(),
						},
					];
				}
				return folder;
			});
		});
	}

	function deleteTask(taskId) {
		setStorage((prev) => {
			return prev.map((folder) => {
				if (folder.active) {
					folder.tasks = folder.tasks.reduce((reduced, task) => {
						if (task.id !== taskId) reduced.push(task);
						return reduced;
					}, []);
				}
				return folder;
			});
		});
	}

	return (
		<StorageContext.Provider value={[storage, setStorage]}>
			<AppendFolderContext.Provider value={appendFolder}>
				<DeleteFolderContext.Provider value={deleteFolder}>
					<AppendTaskContext.Provider value={appendTask}>
						<DeleteTaskContext.Provider value={deleteTask}>
							{children}
						</DeleteTaskContext.Provider>
					</AppendTaskContext.Provider>
				</DeleteFolderContext.Provider>
			</AppendFolderContext.Provider>
		</StorageContext.Provider>
	);
};
