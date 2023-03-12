import React, { useEffect, useState } from 'react';

function FolderOptions({ hideOptions, handleDelete }) {
	function handleClick(e) {
		const parentClass = e.target.parentElement.className;
		if (parentClass !== 'folder active') hideOptions();
	}

	useEffect(() => {
		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<div className="options">
			<div className="option" onClick={handleDelete}>
				Delete
			</div>
			<div className="option">Edit</div>
			<div className="option">Duplicate</div>
			<div className="option">Add to Favorites</div>
		</div>
	);
}

export default FolderOptions;
