import React, { useState, useEffect } from 'react';
import { useStorage } from './contexts/storageContext';
import Task from './task';
import TaskForm from './taskForm';
import uniqid from 'uniqid';
import TitleForm from './titleForm';
import Section from './section';

export default function Tasks() {
	const [storage, setStorage] = useStorage();
	const [addTaskMode, setAddTaskMode] = useState(false);
	const [addSectionMode, setAddSectionMode] = useState(false);

	const enableAddTaskMode = () => setAddTaskMode(true);
	const disableAddTaskMode = () => setAddTaskMode(false);
	const enableAddSectionMode = () => setAddSectionMode(true);
	const disableAddSectionMode = () => setAddSectionMode(false);

	useEffect(() => setAddTaskMode(false), [returnActiveFolder()]);

	function handleTaskSubmit(data) {
		setStorage((folders) =>
			folders.map((folder) =>
				folder.active
					? {
							...folder,
							tasks: [
								...folder.tasks,
								{
									...data,
									completed: false,
									edit: false,
									id: uniqid(),
								},
							],
					  }
					: folder
			)
		);
	}

	function handleTaskDelete(taskId) {
		setStorage((folders) =>
			folders.map((folder) =>
				folder.active
					? {
							...folder,
							tasks: folder.tasks.reduce((reduced, task) => {
								if (task.id !== taskId) reduced.push(task);
								return reduced;
							}, []),
					  }
					: folder
			)
		);
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

	function handleTaskEdit(id, updates) {
		setStorage((folders) =>
			folders.map((folder) =>
				folder.active
					? {
							...folder,
							tasks: folder.tasks.map((task) =>
								task.id === id
									? Object.assign(task, {
											...updates,
											edit: false,
									  })
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

	function handleSectionSubmit(data) {
		setStorage((folders) =>
			folders.map((folder) =>
				folder.active
					? {
							...folder,
							sections: [
								...folder.sections,
								{
									...data,
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
		<div className="main">
			{/* checks if there are any selected folders */}
			{returnActiveFolder() ? (
				// if yes renders tasks and form
				<>
					<div
						className="main--title"
						style={{ color: returnActiveFolder().color }}
					>
						{returnActiveFolder().title}
					</div>
					<div className="main--tasks">
						{returnActiveFolder().tasks.map((task) => {
							return task.edit ? (
								<TaskForm
									task={task}
									handleCancel={() => {}}
									handleEdit={handleTaskEdit}
									key={task.id}
								/>
							) : (
								<Task
									task={task}
									handleDelete={handleTaskDelete}
									handleDuplicate={handleTaskDuplicate}
									enableEdit={enableTaskEdit}
									handleComplete={handleTaskComplete}
									key={task.id}
									Delete
									Edit
									Duplicate
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
									className="add--task"
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
									key={uniqid()}
									Inline
								/>
							) : (
								<div
									className="add--section"
									onClick={() => {
										enableAddSectionMode();
										disableAddTaskMode();
									}}
								>
									<div className="add--section--decoration"></div>
									<div className="add--section--text">
										Add Section
									</div>
									<div className="add--section--decoration"></div>
								</div>
							)}
						</h3>

						{returnActiveFolder().sections.map((section) => {
							return (
								<Section
									section={section}
									id={section.id}
									key={section.id}
								/>
							);
						})}
					</div>
				</>
			) : (
				// if no asks to select a folder
				<h2 className="not-selected">Select a Folder</h2>
			)}
		</div>
	);
}
