import React, { useState, useRef, useEffect } from 'react';
import { useStorage } from './contexts/StorageContext';
import uniqid from 'uniqid';
import { useTheme } from './contexts/ThemeContext';

function FolderList({ hideFolderList, handleSectionMove, moreRef }) {
	const [storage, setStorage] = useStorage();
	const [searchValue, setSearchValue] = useState('');
	const [theme, setTheme] = useTheme();

	const folderListRef = useRef();
	const searchInputRef = useRef();

	function handleWindowClick(e) {
		if (
			!folderListRef.current.contains(e.target) &&
			folderListRef.current.className !== e.target?.className &&
			moreRef.current !== e.target
		)
			hideFolderList();
	}

	useEffect(() => {
		window.addEventListener('click', handleWindowClick);
		searchInputRef.current.focus();
		return () => window.removeEventListener('click', handleWindowClick);
	}, []);

	function escapeRegex(string) {
		return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
	}

	return (
		<div
			className={`folderList ${theme === 'dark' ? 'dark' : ''}`}
			ref={folderListRef}
		>
			<input
				type="text"
				value={searchValue.source}
				onInput={(e) => setSearchValue(e.target.value)}
				ref={searchInputRef}
			/>
			{storage.map((folder) => {
				return new RegExp(searchValue, 'i').test(
					escapeRegex(folder.title)
				) ? (
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
				) : null;
			})}
		</div>
	);
}

export default FolderList;
