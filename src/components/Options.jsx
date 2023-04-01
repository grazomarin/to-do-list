import React, { useEffect, useState, useRef } from 'react';

function Options({
	hideOptions,
	enableEdit,
	handleDuplicate,
	enableDelete,
	moreRef,
	Delete,
	Edit,
	Duplicate,
	Favorites,
}) {
	const optionsRef = useRef();

	function handleClick(e) {
		if (
			!optionsRef.current.contains(e.target) &&
			optionsRef.current.className !== e.target?.className &&
			moreRef.current !== e.target
		)
			hideOptions();
	}

	useEffect(() => {
		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);

	return (
		<div className="options" ref={optionsRef}>
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
			{Favorites && <div className="option">Add to Favorites</div>}
		</div>
	);
}

export default Options;
