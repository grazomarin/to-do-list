import React, { useState, useEffect } from 'react';
import {
	useAppendTask,
	useDeleteTask,
	useStorage,
} from './contexts/StorageContext';
import Header from './Header';
import Task from './Task';
import TaskForm from './TaskForm';

function Main() {
	const [storage, setStorage] = useStorage();
	const appendTask = useAppendTask();
	const deleteTask = useDeleteTask();
	const [addMode, setAddMode] = useState(false);

	function toggleAddMode() {
		setAddMode((prev) => !prev);
	}

	function handleSubmit(e, values) {
		e.preventDefault();
		toggleAddMode();
		appendTask(values);
	}

	function handleDelete(taskId) {
		deleteTask(taskId);
	}

	return (
		<div className="main">
			<Header />
			{/* checks if there are any selected folders */}
			{storage.some((folder) => folder.active) ? (
				// if yes renders tasks and form
				<div className="tasks">
					{storage
						.find((folder) => folder.active)
						.tasks.map((task) => {
							return (
								<Task
									title={task.title}
									description={task.description}
									id={task.id}
									handleDelete={handleDelete}
									key={task.id}
								/>
							);
						})}

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
			) : (
				// if no asks to select a folder
				<h2 className="notSelected">Select a Folder</h2>
			)}
		</div>
	);
}
export default Main;
