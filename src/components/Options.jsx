import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from './contexts/ThemeContext';

function Options({
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
	const { theme } = useTheme();

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
		<div
			className={`options ${theme === 'dark' ? 'dark' : ''}`}
			ref={optionsRef}
		>
			{Delete && (
				<div className="option" onClick={enableDelete}>
					Delete
				</div>
			)}
			{Edit && (
				<div className="option" onClick={enableEdit}>
					Edit
				</div>
			)}
			{Duplicate && (
				<div className="option" onClick={handleDuplicate}>
					Duplicate
				</div>
			)}
			{AddFavorite && (
				<div className="option" onClick={handleAddToFavorites}>
					Add to Favorites
				</div>
			)}
			{RemoveFavorite && (
				<div className="option" onClick={handleRemoveFromFavorites}>
					Remove from Favorites
				</div>
			)}
			{MoveSection && (
				<div className="option" onClick={displayFolderList}>
					Move Section
				</div>
			)}
		</div>
	);
}

export default Options;
