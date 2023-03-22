import React, { useState } from 'react';
import {
	useStorage,
	useAppendFolder,
	useDeleteFolder,
} from './contexts/StorageContext';
import Folder from './Folder';
import FolderForm from './FolderForm';
import add from '../assets/images/add.svg';

function Index() {
	const [addMode, setAddMode] = useState(false);
	const [storage, setStorage] = useStorage();
	const appendFolder = useAppendFolder();
	const deleteFolder = useDeleteFolder();

	function enableAddMode() {
		setAddMode(true);
	}

	function disableAddMode() {
		setAddMode(false);
	}

	function isTheSameFolderClicked(id) {
		for (const folder of storage) {
			if (folder.active) {
				return folder.id === id;
			}
		}
	}

	function makeFoldersInactive() {
		setStorage((prev) =>
			prev.map((folder) => ({
				...folder,
				active: false,
			}))
		);
	}

	function makeFolderActive(folderId) {
		if (isTheSameFolderClicked(folderId)) return;
		makeFoldersInactive();
		setStorage((prev) => {
			return prev.map((folder) => {
				folder.id === folderId && (folder.active = true);
				return folder;
			});
		});
	}

	function handleSubmit(title) {
		makeFoldersInactive();
		appendFolder(title);
	}

	function handleDelete(id) {
		deleteFolder(id);
	}

	function enableEdit(folderId) {
		setStorage((prev) => {
			return prev.map((folder) => {
				folder.edit = false;
				folder.id === folderId && (folder.edit = true);
				return folder;
			});
		});
	}

	function handleEdit(folderId, title) {
		makeFoldersInactive();
		setStorage((prev) => {
			return prev.map((folder) => {
				if (folder.id === folderId) {
					return {
						title: title,
						tasks: [...folder.tasks],
						active: true,
						edit: false,
						id: folderId,
					};
				}
				return folder;
			});
		});
	}

	return (
		<div className="index">
			<div>
				<div className="title">
					Folders:
					<img
						src={add}
						alt=""
						className="plus"
						onClick={() => {
							!addMode && enableAddMode();
						}}
					/>
				</div>
			</div>
			{storage.map((folder) => {
				return folder.edit ? (
					<FolderForm
						disableAddMode={disableAddMode}
						handleEdit={handleEdit}
						oldTitle={folder.title}
						id={folder.id}
						key={folder.id}
					/>
				) : (
					<Folder
						makeActive={makeFolderActive}
						handleDelete={handleDelete}
						enableEdit={enableEdit}
						title={folder.title}
						tasks={folder.tasks}
						id={folder.id}
						active={folder.active}
						key={folder.id}
					/>
				);
			})}
			{addMode && (
				<FolderForm
					disableAddMode={disableAddMode}
					handleSubmit={handleSubmit}
				/>
			)}
		</div>
	);
}

export default Index;
