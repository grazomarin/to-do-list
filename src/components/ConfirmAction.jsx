import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from './contexts/ThemeContext';

function ConfirmAction({ title, handleDelete, handleCancel }) {
	const [theme, setTheme] = useTheme();

	function handleClick(e) {
		const parentClass = e.target.parentElement.className;
		if (!parentClass) handleCancel();
	}

	useEffect(() => {
		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);

	return ReactDOM.createPortal(
		<div className="overlay">
			<div className={`confirm ${theme === 'dark' ? 'dark' : ''}`}>
				<h2>
					Are you sure you want to delete <b>{title}</b>?
				</h2>
				<div className={`buttons ${theme == 'dark' ? 'dark' : ''}`}>
					<button className="submit" onClick={handleDelete}>
						Confirm
					</button>
					<button className="cancel" onClick={handleCancel}>
						Cancel
					</button>
				</div>
			</div>
		</div>,
		document.querySelector('.container')
	);
}

export default ConfirmAction;
