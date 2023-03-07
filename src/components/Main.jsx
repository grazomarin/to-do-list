import React, { useState } from 'react';
import TaskForm from './TaskForm';

function Main() {
	const [addMode, setAddMode] = useState(false);

	function toggleAddMode() {
		setAddMode((prev) => !prev);
	}

	function handleSubmit(e) {}

	return (
		<div className="main">
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
	);
}

export default Main;
