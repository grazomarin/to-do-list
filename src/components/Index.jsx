import React, { useState } from 'react';
import { useStorage } from './contexts/StorageContext';
import Folder from './Folder';
import FolderForm from './FolderForm';

function Index() {
	const [addMode, setAddMode] = useState(false);
	const data = useStorage();

	function toggleAddMode() {
		setAddMode((prev) => !prev);
	}

	function handleSubmit(e) {}

	return (
		<ul className="index">
			{data.map((folder) => {
				return (
					<Folder
						name={folder.name}
						id={folder}
						active={folder.active}
						key={folder.id}
					/>
				);
			})}
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
		</ul>
	);
}

export default Index;
