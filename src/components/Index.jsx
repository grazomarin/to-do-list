import React, { useState } from 'react';
import {
	useStorage,
	useSetStorage,
	useAppendFolder,
} from './contexts/StorageContext';
import Folder from './Folder';
import FolderForm from './FolderForm';
import add from '../assets/images/add.svg';

function Index() {
	const [addMode, setAddMode] = useState(false);
	const storage = useStorage();
	const setStorage = useSetStorage();
	const appendFolder = useAppendFolder();
	const [currentFolderId, setCurrentFolderId] = useState(storage[0].id);

	function toggleAddMode() {
		setAddMode((prev) => !prev);
	}

	function isTheSameFolderClicked(id) {
		for (const folder of storage) {
			if (folder.active) {
				return folder.id === id;
			}
		}
	}

	function makeFolderActive(id) {
		if (isTheSameFolderClicked(id)) return;
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

	function handleSubmit(e, values) {
		e.preventDefault();
		makeFoldersInactive();
		appendFolder(values.title);
	}

	return (
		<div className="index">
			<div>
				<div className="title">
					Projects{' '}
					<img
						src={add}
						alt=""
						className="icon"
						onClick={() => {
							!addMode && toggleAddMode();
						}}
					/>
				</div>
			</div>
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
			{addMode && (
				<FolderForm
					toggleDisplay={toggleAddMode}
					handleSubmit={handleSubmit}
				/>
			)}
		</div>
	);
}

export default Index;
