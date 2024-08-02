import { useState, useRef, useEffect } from 'react';
import uniqid from 'uniqid';
import { useSelector } from 'react-redux';

function FolderPicker({ setShowFolderPicker, handleSectionMove }) {
	const folders = useSelector((state) => state.todo.folders);
	const [searchValue, setSearchValue] = useState('');

	const folderListRef = useRef();
	const searchInputRef = useRef();

	useEffect(() => {
		function handleClick(e) {
			if (
				!folderListRef.current.contains(e.target) &&
				e.target.className !== folderListRef.current.className &&
				e.target.className !== 'options--option'
			)
				setShowFolderPicker(false);
		}

		window.addEventListener('click', handleClick);
		return () => window.removeEventListener('click', handleClick);
	}, []);

	return (
		<div className='folder-picker' ref={folderListRef}>
			<input
				type='text'
				value={searchValue.source}
				onInput={(e) => setSearchValue(e.target.value)}
				ref={searchInputRef}
			/>
			{folders
				.filter((folder) => new RegExp(searchValue, 'i').test(folder.title))
				.map((folder) => (
					<div
						className='folder-picker--folder-name'
						onClick={() => {
							handleSectionMove(folder.id);
							setShowFolderPicker(false);
						}}
						key={uniqid()}
					>
						{folder.title}
					</div>
				))}
		</div>
	);
}

export default FolderPicker;
