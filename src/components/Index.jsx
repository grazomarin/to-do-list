import React, { useState } from 'react';
import { useStorage } from './contexts/StorageContext';
import Folder from './Folder';
import TitleForm from './TitleForm';
import uniqid from 'uniqid';
import { useTheme } from './contexts/ThemeContext';
import AddIcon from './icon_components/AddIcon';

function Index() {
	const [addMode, setAddMode] = useState(false);
	const [storage, setStorage] = useStorage();
	const [theme, setTheme] = useTheme();

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

	function handleSubmitFolder(title, color) {
		makeFoldersInactive();
		setStorage((folders) => [
			...folders,
			{
				title: title,
				tasks: [],
				sections: [],
				color: color,
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

	function handleEdit(folderId, title, color) {
		makeFoldersInactive();
		setStorage((folders) => {
			return folders.map((folder) => {
				return folder.id === folderId
					? {
							title: title,
							tasks: [...folder.tasks],
							sections: [...folder.sections],
							favorite: folder.favorite,
							color: color,
							active: true,
							edit: false,
							id: folderId,
					  }
					: folder;
			});
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
		<div className={`index ${theme === 'dark' ? 'dark' : ''}`}>
			{areThereFavoriteFolders() && (
				<>
					<div className="title">Favorites:</div>
					{storage.map((folder) => {
						return (
							folder.favorite && (
								<Folder
									title={folder.title}
									color={folder.color}
									tasks={folder.tasks}
									sections={folder.sections}
									id={folder.id}
									active={folder.active}
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
			<div className="title">
				Folders:
				<AddIcon handleClick={enableAddMode} />
			</div>
			{storage.map((folder) => {
				return folder.edit ? (
					<TitleForm
						handleCancel={() => {}}
						handleEdit={handleEdit}
						oldTitle={folder.title}
						oldColor={folder.color}
						id={folder.id}
						key={folder.id}
						Bullet
					/>
				) : (
					<Folder
						title={folder.title}
						color={folder.color}
						tasks={folder.tasks}
						sections={folder.sections}
						id={folder.id}
						active={folder.active}
						makeActive={makeFolderActive}
						handleDelete={handleDeleteFolder}
						handleDuplicate={handleDuplicate}
						handleAddToFavorites={handleAddToFavorites}
						handleRemoveFromFavorites={handleRemoveFromFavorites}
						enableEdit={enableEdit}
						key={folder.id}
						Delete
						Edit
						Duplicate
						AddFavorite={folder.favorite ? false : true}
						RemoveFavorite={folder.favorite ? true : false}
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

export default Index;
