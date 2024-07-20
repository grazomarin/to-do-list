import { useState } from 'react';
import Folder from './folder';
import AddIcon from './icon_components/addIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveFolderId } from '../storage/storage';

export default function Index() {
	const [isFolderFormActive, setIsFolderFormActive] = useState(false);
	const [editFolderId, setEditFolderId] = useState(null);
	const dispatch = useDispatch();
	const activeFolderId = useSelector((state) => state.todo.activeFolderId);
	const folders = useSelector((state) => state.todo.folders);

	function loadFavoriteFolders() {
		const favoriteFolders = folders.filter((folder) => folder.favorite);
		if (favoriteFolders.length == 0) return null;
		return (
			<>
				<div className='index--title'>Favorites:</div>
				{favoriteFolders.map((folder) => {
					return (
						<Folder
							folder={folder}
							enableEdit={() => setEditFolderId(folder.id)}
							setActiveFolderId={() =>
								dispatch(setActiveFolderId({ id: folder.id }))
							}
							active={activeFolderId === folder.id}
							key={folder.id}
						/>
					);
				})}
			</>
		);
	}

	return (
		<div className='index'>
			{loadFavoriteFolders()}
			<div className='index--title'>
				Folders:
				<AddIcon handleClick={() => setIsFolderFormActive(true)} />
			</div>
			{folders.map((folder) => {
				return editFolderId === folder.id ? (
					<Folder.Form
						folder={folder}
						disableForm={() => setEditFolderId(null)}
						key={folder.id}
					/>
				) : (
					<Folder
						folder={folder}
						enableEdit={() => setEditFolderId(folder.id)}
						setActiveFolderId={() =>
							dispatch(setActiveFolderId({ id: folder.id }))
						}
						active={activeFolderId === folder.id}
						key={folder.id}
					/>
				);
			})}
			{isFolderFormActive && (
				<Folder.Form disableForm={() => setIsFolderFormActive(false)} />
			)}
		</div>
	);
}
