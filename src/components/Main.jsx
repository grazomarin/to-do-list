import React, { useState } from 'react';
import { useStorage } from './contexts/StorageContext';
import Header from './Header';
import TaskForm from './TaskForm';

function Main() {
	const [addMode, setAddMode] = useState(false);

	function toggleAddMode() {
		setAddMode((prev) => !prev);
	}

	function handleSubmit(e) {}

	return (
		<div className="main">
			<Header />
			<div className="tasks">
				{addMode ? (
					<TaskForm
						toggleDisplay={toggleAddMode}
						handleSubmit={handleSubmit}
					/>
				) : (
					<h3 className="add" onClick={toggleAddMode}>
						+ add task
					</h3>
				)}
			</div>
		</div>
	);
}

export default Main;
