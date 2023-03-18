import React, { useEffect, useState, useRef } from 'react';

function Options({ hideOptions, toggleConfirm, moreRef }) {
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
			<div className="option" onClick={toggleConfirm}>
				Delete
			</div>
			<div className="option">Edit</div>
			<div className="option">Duplicate</div>
			<div className="option">Add to Favorites</div>
		</div>
	);
}

export default Options;
