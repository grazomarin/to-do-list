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

	const enableAddMode = () => setAddMode(true);
	const disableAddMode = () => setAddMode(false);

	function handleSubmit(title, description) {
		disableAddMode();
		appendTask(title, description);
	}

	function handleDelete(taskId) {
		deleteTask(taskId);
	}

	function handleComplete(taskId) {
		setStorage((prev) =>
			prev.map((folder) => {
				if (folder.active) {
					return {
						...folder,
						tasks: folder.tasks.map((task) => {
							if (task.id === taskId) {
								return {
									...task,
									completed: !task.completed,
								};
							}
							return task;
						}),
					};
				}
				return folder;
			})
		);
	}

	function disableOtherEdits() {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							tasks: folder.tasks.map((task) => {
								return {
									...task,
									edit: false,
								};
							}),
					  }
					: folder
			)
		);
	}

	function enableEdit(taskId) {
		disableOtherEdits();
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							tasks: folder.tasks.map((task) =>
								task.id === taskId
									? {
											...task,
											edit: true,
									  }
									: task
							),
					  }
					: folder
			)
		);
	}

	function handleEdit(taskId, title, description) {
		disableOtherEdits();
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							tasks: folder.tasks.map((task) =>
								task.id === taskId
									? {
											title: title,
											description: description,
											completed: false,
											edit: false,
											id: task.id,
									  }
									: task
							),
					  }
					: folder
			)
		);
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
							return task.edit ? (
								<TaskForm
									oldTitle={task.title}
									oldDescription={task.description}
									id={task.id}
									disableAddMode={disableAddMode}
									handleEdit={handleEdit}
									handleSubmit={handleSubmit}
									key={task.id}
								/>
							) : (
								<Task
									title={task.title}
									description={task.description}
									id={task.id}
									completed={task.completed}
									handleDelete={handleDelete}
									enableEdit={enableEdit}
									handleComplete={handleComplete}
									key={task.id}
								/>
							);
						})}

					{addMode ? (
						<TaskForm
							disableAddMode={disableAddMode}
							handleSubmit={handleSubmit}
						/>
					) : (
						<h3 className="add" onClick={enableAddMode}>
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
