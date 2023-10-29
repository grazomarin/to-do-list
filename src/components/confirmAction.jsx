import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function ConfirmAction({ title, handleDelete, handleCancel }) {
	function handleClick(e) {
		if (e.target.className === 'overlay') handleCancel();
	}

	useEffect(() => {
		window.addEventListener('click', handleClick);
		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);

	return ReactDOM.createPortal(
		<div className='overlay'>
			<div className='confirm'>
				<h2>
					Are you sure you want to delete <b>{title}</b>?
				</h2>
				<div className='buttons'>
					<button className='buttons--submit' onClick={handleDelete}>
						Confirm
					</button>
					<button className='buttons--cancel' onClick={handleCancel}>
						Cancel
					</button>
				</div>
			</div>
		</div>,
		document.querySelector('.container')
	);
}
