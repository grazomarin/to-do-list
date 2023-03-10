import React, { useState } from 'react';
import {
	useStorage,
	useSetStorage,
	useAppendFolder,
} from './contexts/StorageContext';
import Folder from './Folder';
import FolderForm from './FolderForm';

function Index() {
	const [addMode, setAddMode] = useState(false);
	const storage = useStorage();
	const setStorage = useSetStorage();
	const appendFolder = useAppendFolder();

	function toggleAddMode() {
		setAddMode((prev) => !prev);
	}

	function makeFolderActive(id) {
		makeFoldersInactive();
		setStorage((prev) => {
			return prev.map((folder) => {
				folder.id === id ? (folder.active = true) : null;
				return folder;
			});
		});
	}

	function makeFoldersInactive() {
		setStorage((prev) => {
			return prev.map((folder) => {
				folder.active = false;
				return folder;
			});
		});
	}

	const handleSubmit = (e, values) => {
		e.preventDefault();
		makeFoldersInactive();
		appendFolder(values.title);
	};

	return (
		<div className="index">
			{storage.map((folder) => {
				return (
					<Folder
						makeActive={makeFolderActive}
						name={folder.name}
						id={folder.id}
						active={folder.active}
						key={folder.id}
					/>
				);
			})}
			{addMode ? (
				<FolderForm
					toggleDisplay={toggleAddMode}
					handleSubmit={handleSubmit}
				/>
			) : (
				<h3 className="add" onClick={toggleAddMode}>
					+ add folder
				</h3>
			)}
		</div>
	);
}

export default Index;
