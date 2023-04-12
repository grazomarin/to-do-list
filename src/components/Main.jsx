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
import { useTheme } from './contexts/ThemeContext';

function Main() {
	const [storage, setStorage] = useStorage();
	const appendTask = useAppendTask();
	const deleteTask = useDeleteTask();
	const [addTaskMode, setAddTaskMode] = useState(false);
	const [addSectionMode, setAddSectionMode] = useState(false);
	const [theme, setTheme] = useTheme();

	const enableAddTaskMode = () => setAddTaskMode(true);
	const disableAddTaskMode = () => setAddTaskMode(false);
	const enableAddSectionMode = () => setAddSectionMode(true);
	const disableAddSectionMode = () => setAddSectionMode(false);

	useEffect(() => setAddTaskMode(false), [returnActiveFolder()]);

	function handleTaskSubmit(title, description, dueDate) {
		appendTask(title, description, dueDate);
	}

	function handleTaskDelete(taskId) {
		deleteTask(taskId);
	}

	function handleTaskComplete(taskId) {
		setStorage((folders) =>
			folders.map((folder) => {
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

	function enableTaskEdit(taskId) {
		setStorage((folders) =>
			folders.map((folder) =>
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

	function handleTaskEdit(taskId, title, description, dueDate) {
		setStorage((folders) =>
			folders.map((folder) =>
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

	function handleTaskDuplicate(taskId) {
		setStorage((folders) =>
			folders.map((folder) =>
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
		setStorage((folders) =>
			folders.map((folder) =>
				folder.active
					? {
							...folder,
							sections: [
								...folder.sections,
								{
									title: title,
									edit: false,
									tasks: [],
									folded: false,
									id: uniqid(),
								},
							],
					  }
					: folder
			)
		);
	}

	return (
		<div className={`main ${theme === 'dark' ? 'dark' : ''}`}>
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
									handleEdit={handleTaskEdit}
									key={task.id}
								/>
							) : (
								<Task
									title={task.title}
									description={task.description}
									dueDate={task.dueDate}
									id={task.id}
									completed={task.completed}
									handleDelete={handleTaskDelete}
									handleDuplicate={handleTaskDuplicate}
									enableEdit={enableTaskEdit}
									handleComplete={handleTaskComplete}
									key={task.id}
									Delete
									Edit
									Duplicate
									AddFavorite
								/>
							);
						})}

						<h3 className="add">
							{addTaskMode ? (
								<TaskForm
									handleSubmit={handleTaskSubmit}
									handleCancel={disableAddTaskMode}
									key={uniqid()}
								/>
							) : (
								<div
									className="add_task"
									onClick={() => {
										enableAddTaskMode();
										disableAddSectionMode();
									}}
								>
									+ add task
								</div>
							)}
							{addSectionMode ? (
								<TitleForm
									handleSubmit={handleSectionSubmit}
									handleCancel={disableAddSectionMode}
									Inline
									key={uniqid()}
								/>
							) : (
								<div
									className="add_section"
									onClick={() => {
										enableAddSectionMode();
										disableAddTaskMode();
									}}
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
									folded={section.folded}
									id={section.id}
									key={section.id}
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
