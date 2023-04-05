import React, { useState, useRef, useEffect } from 'react';
import { useStorage } from './contexts/StorageContext';
import uniqid from 'uniqid';

function FolderList({ hideFolderList, handleSectionMove, moreRef }) {
	const [storage, setStorage] = useStorage();

	const folderListRef = useRef();

	function handleClick(e) {
		if (
			!folderListRef.current.contains(e.target) &&
			folderListRef.current.className !== e.target?.className &&
			moreRef.current !== e.target
		)
			hideFolderList();
	}

	useEffect(() => {
		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<div className="folderList" ref={folderListRef}>
			{storage.map((folder) => {
				return (
					<div
						className="folder_name"
						onClick={() => {
							hideFolderList();
							handleSectionMove(folder.id);
						}}
						key={uniqid()}
					>
						{folder.title}
					</div>
				);
			})}
		</div>
	);
}

export default FolderList;
