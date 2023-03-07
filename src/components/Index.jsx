import React, { useState } from 'react';
import FolderForm from './FolderForm';

function Index() {
	const [addMode, setAddMode] = useState(false);

	function toggleAddMode() {
		setAddMode((prev) => !prev);
	}

	function handleSubmit(e) {}

	return (
		<div className="index">
			{addMode ? (
				<FolderForm
					toggleDisplay={toggleAddMode}
					handleSubmit={handleSubmit}
				/>
			) : (
				<h3 className="add" onClick={toggleAddMode}>
					+ add folder
				</h3>
			)}
		</div>
	);
}

export default Index;
