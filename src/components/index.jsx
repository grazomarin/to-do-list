import React, { useState } from 'react';
import { useStorage } from './contexts/storageContext';
import Folder from './folder';
import TitleForm from './titleForm';
import uniqid from 'uniqid';
import AddIcon from './icon_components/addIcon';

export default function Index() {
	const [addMode, setAddMode] = useState(false);
	const [storage, setStorage] = useStorage();

	const enableAddMode = () => setAddMode(true);
	const disableAddMode = () => setAddMode(false);

	function isTheSameFolderClicked(id) {
		for (const folder of storage) {
			if (folder.active) {
				return folder.id === id;
			}
		}
	}

	function makeFoldersInactive() {
		setStorage((folders) =>
			folders.map((folder) => ({
				...folder,
				active: false,
			}))
		);
	}

	function makeFolderActive(folderId) {
		if (isTheSameFolderClicked(folderId)) return;
		makeFoldersInactive();
		setStorage((folders) => {
			return folders.map((folder) => {
				folder.id === folderId && (folder.active = true);
				return folder;
			});
		});
	}

	function handleSubmitFolder(data) {
		makeFoldersInactive();
		setStorage((folders) => [
			...folders,
			{
				...data,
				tasks: [],
				sections: [],
				favorite: false,
				active: true,
				edit: false,
				id: uniqid(),
			},
		]);
	}

	function handleDeleteFolder(folderId) {
		setStorage((folders) =>
			folders.reduce((reduced, folder) => {
				if (folder.id !== folderId) reduced.push(folder);
				return reduced;
			}, [])
		);
	}

	function enableEdit(folderId) {
		setStorage((folders) => {
			return folders.map((folder) => {
				folder.edit = false;
				folder.id === folderId && (folder.edit = true);
				return folder;
			});
		});
	}

	function handleEdit(folderId, updates) {
		makeFoldersInactive();
		setStorage((folders) => {
			return folders.map((folder) =>
				folder.id === folderId
					? Object.assign(folder, {
							...updates,
							active: true,
							edit: false,
					  })
					: folder
			);
		});
	}

	function handleDuplicate(folderId) {
		setStorage((folders) =>
			folders.reduce((updated, folder) => {
				folder.id === folderId
					? updated.push(folder, {
							...folder,
							title: `Copy of ${folder.title}`,
							id: uniqid(),
							active: false,
					  })
					: updated.push(folder);

				return updated;
			}, [])
		);
	}

	function areThereFavoriteFolders() {
		for (let i = 0; i < storage.length; i++) {
			if (storage[i].favorite) return true;
		}
		return false;
	}

	function handleAddToFavorites(folderId) {
		setStorage((folders) =>
			folders.map((folder) =>
				folder.id === folderId ? { ...folder, favorite: true } : folder
			)
		);
	}

	function handleRemoveFromFavorites(folderId) {
		setStorage((folders) =>
			folders.map((folder) =>
				folder.id === folderId ? { ...folder, favorite: false } : folder
			)
		);
	}

	return (
		<div className='index'>
			{areThereFavoriteFolders() && (
				<>
					<div className='index--title'>Favorites:</div>
					{storage.map((folder) => {
						return (
							folder.favorite && (
								<Folder
									folder={folder}
									makeActive={makeFolderActive}
									enableEdit={enableEdit}
									handleRemoveFromFavorites={
										handleRemoveFromFavorites
									}
									key={folder.id}
									Edit
									RemoveFavorite
								/>
							)
						);
					})}
				</>
			)}
			<div className='index--title'>
				Folders:
				<AddIcon handleClick={enableAddMode} />
			</div>
			{storage.map((folder) => {
				return folder.edit ? (
					<TitleForm
						handleCancel={() => {}}
						handleEdit={handleEdit}
						data={folder}
						key={folder.id}
						Bullet
					/>
				) : (
					<Folder
						folder={folder}
						makeActive={makeFolderActive}
						handleDelete={handleDeleteFolder}
						handleDuplicate={handleDuplicate}
						handleAddToFavorites={handleAddToFavorites}
						handleRemoveFromFavorites={handleRemoveFromFavorites}
						enableEdit={enableEdit}
						key={folder.id}
						AddFavorite={folder.favorite ? false : true}
						RemoveFavorite={folder.favorite ? true : false}
						Delete
						Edit
						Duplicate
					/>
				);
			})}
			{addMode && (
				<TitleForm
					handleCancel={disableAddMode}
					handleSubmit={handleSubmitFolder}
					Bullet
				/>
			)}
		</div>
	);
}
