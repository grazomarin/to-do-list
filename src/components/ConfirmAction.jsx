import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function ConfirmAction({ name, handleDelete, toggleConfirm }) {
	function handleClick(e) {
		const parentClass = e.target.parentElement.className;
		if (!parentClass) toggleConfirm();
	}

	useEffect(() => {
		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);

	return ReactDOM.createPortal(
		<div className="overlay">
			<div className="confirm">
				<h2>
					Are you sure you want to delete <b>{name}</b>?
				</h2>
				<div className="buttons">
					<button className="submit" onClick={handleDelete}>
						Confirm
					</button>
					<button className="cancel" onClick={toggleConfirm}>
						Cancel
					</button>
				</div>
			</div>
		</div>,
		document.getElementById('root')
	);
}

export default ConfirmAction;
