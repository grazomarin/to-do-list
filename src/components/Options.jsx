import React, { useEffect, useState, useRef } from 'react';

export default function Options({
	hideOptions,
	enableEdit,
	handleDuplicate,
	handleAddToFavorites,
	handleRemoveFromFavorites,
	displayFolderList,
	enableDelete,
	moreRef,
	Delete,
	Edit,
	Duplicate,
	AddFavorite,
	RemoveFavorite,
	MoveSection,
}) {
	const optionsRef = useRef();

	function handleWindowClick(e) {
		if (
			!optionsRef.current.contains(e.target) &&
			optionsRef.current.className !== e.target?.className &&
			moreRef.current !== e.target
		)
			hideOptions();
	}

	useEffect(() => {
		window.addEventListener('click', handleWindowClick);
		return () => window.removeEventListener('click', handleWindowClick);
	}, []);

	return (
		<div className="options" ref={optionsRef}>
			{Delete && (
				<div className="options--option" onClick={enableDelete}>
					Delete
				</div>
			)}
			{Edit && (
				<div className="options--option" onClick={enableEdit}>
					Edit
				</div>
			)}
			{Duplicate && (
				<div className="options--option" onClick={handleDuplicate}>
					Duplicate
				</div>
			)}
			{AddFavorite && (
				<div className="options--option" onClick={handleAddToFavorites}>
					Add to Favorites
				</div>
			)}
			{RemoveFavorite && (
				<div
					className="options--option"
					onClick={handleRemoveFromFavorites}
				>
					Remove from Favorites
				</div>
			)}
			{MoveSection && (
				<div className="options--option" onClick={displayFolderList}>
					Move Section
				</div>
			)}
		</div>
	);
}
