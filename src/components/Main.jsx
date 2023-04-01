import React, { useState, useEffect } from 'react';
import {
	useAppendTask,
	useDeleteTask,
	useStorage,
} from './contexts/StorageContext';
import Task from './Task';
import TaskForm from './TaskForm';
import uniqid from 'uniqid';
import TitleForm from './TitleForm';
import Section from './Section';

function Main() {
	const [storage, setStorage] = useStorage();
	const appendTask = useAppendTask();
	const deleteTask = useDeleteTask();
	const [addTaskMode, setAddTaskMode] = useState(false);
	const [addSectionMode, setAddSectionMode] = useState(false);

	const enableAddTaskMode = () => setAddTaskMode(true);
	const disableAddTaskMode = () => setAddTaskMode(false);
	const enableAddSectionMode = () => setAddSectionMode(true);
	const disableAddSectionMode = () => setAddSectionMode(false);

	useEffect(() => setAddTaskMode(false), [returnActiveFolder()]);

	function handleTaskSubmit(title, description, dueDate) {
		disableAddTaskMode();
		appendTask(title, description, dueDate);
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

	function enableEdit(taskId) {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.map((section) => {
								return {
									...section,
									edit: false,
									tasks: section.tasks.map((task) => {
										return { ...task, edit: false };
									}),
								};
							}),
							tasks: folder.tasks.map((task) =>
								task.id === taskId
									? {
											...task,
											edit: true,
									  }
									: { ...task, edit: false }
							),
					  }
					: folder
			)
		);
	}

	function handleEdit(taskId, title, description, dueDate) {
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
											dueDate: dueDate,
											completed: task.completed,
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

	function handleDuplicate(taskId) {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							tasks: folder.tasks.reduce((updated, task) => {
								task.id === taskId
									? updated.push(task, {
											...task,
											id: uniqid(),
									  })
									: updated.push(task);
								return updated;
							}, []),
					  }
					: folder
			)
		);
	}

	function returnActiveFolder() {
		for (let i = 0; i < storage.length; i++) {
			if (storage[i].active) return storage[i];
		}
		return null;
	}

	function handleSectionSubmit(title) {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							sections: [
								...folder.sections,
								{
									title: title,
									edit: false,
									tasks: [],
									id: uniqid(),
								},
							],
					  }
					: folder
			)
		);
	}

	return (
		<div className="main">
			{/* checks if there are any selected folders */}
			{returnActiveFolder() ? (
				// if yes renders tasks and form
				<>
					<div className="folder_title">
						{returnActiveFolder().title}
					</div>
					<div className="tasks">
						{returnActiveFolder().tasks.map((task) => {
							return task.edit ? (
								<TaskForm
									oldTitle={task.title}
									oldDescription={task.description}
									oldDate={task.dueDate}
									taskId={task.id}
									handleCancel={() => {}}
									handleEdit={handleEdit}
									key={task.id}
								/>
							) : (
								<Task
									title={task.title}
									description={task.description}
									dueDate={task.dueDate}
									id={task.id}
									completed={task.completed}
									handleDelete={handleDelete}
									handleDuplicate={handleDuplicate}
									enableEdit={enableEdit}
									handleComplete={handleComplete}
									key={task.id}
									Delete
									Edit
									Duplicate
									AddFavorite
									RemoveFavorite={false}
								/>
							);
						})}

						<h3 className="add">
							{addTaskMode ? (
								<TaskForm
									handleCancel={disableAddTaskMode}
									handleSubmit={handleTaskSubmit}
								/>
							) : (
								<div
									className="add_task"
									onClick={enableAddTaskMode}
								>
									+ add task
								</div>
							)}
							{addSectionMode ? (
								<TitleForm
									handleSubmit={handleSectionSubmit}
									handleCancel={disableAddSectionMode}
								/>
							) : (
								<div
									className="add_section"
									onClick={enableAddSectionMode}
								>
									<div className="decoration"></div>
									<div className="text">Add Section</div>
									<div className="decoration"></div>
								</div>
							)}
						</h3>

						{returnActiveFolder().sections.map((section) => {
							return (
								<Section
									title={section.title}
									tasks={section.tasks}
									edit={section.edit}
									id={section.id}
									key={section.id}
									Delete
									Edit
									Duplicate
								/>
							);
						})}
					</div>
				</>
			) : (
				// if no asks to select a folder
				<h2 className="notSelected">Select a Folder</h2>
			)}
		</div>
	);
}
export default Main;
