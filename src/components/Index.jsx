import React, { useState } from 'react';
import {
	useStorage,
	useAppendFolder,
	useDeleteFolder,
} from './contexts/StorageContext';
import Folder from './Folder';
import TitleForm from './TitleForm';
import add from '../assets/images/add.svg';
import uniqid from 'uniqid';

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
				return folder.id === folderId
					? {
							title: title,
							tasks: [...folder.tasks],
							sections: [...folder.sections],
							active: true,
							edit: false,
							id: folderId,
					  }
					: folder;
			});
		});
	}

	function handleDuplicate(folderId) {
		setStorage((prev) =>
			prev.reduce((updated, folder) => {
				folder.id === folderId
					? updated.push(folder, {
							...folder,
							id: uniqid(),
							active: false,
					  })
					: updated.push(folder);

				return updated;
			}, [])
		);
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
					<TitleForm
						handleCancel={() => {}}
						handleEdit={handleEdit}
						oldTitle={folder.title}
						id={folder.id}
						key={folder.id}
						bullet
					/>
				) : (
					<Folder
						title={folder.title}
						tasks={folder.tasks}
						sections={folder.sections}
						id={folder.id}
						active={folder.active}
						makeActive={makeFolderActive}
						handleDelete={handleDelete}
						handleDuplicate={handleDuplicate}
						enableEdit={enableEdit}
						key={folder.id}
					/>
				);
			})}
			{addMode && (
				<TitleForm
					handleCancel={disableAddMode}
					handleSubmit={handleSubmit}
					bullet
				/>
			)}
		</div>
	);
}

export default Index;
