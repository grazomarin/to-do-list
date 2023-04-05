import React, { useState, useRef } from 'react';
import { useStorage } from './contexts/StorageContext';
import dots from '../assets/images/dots.svg';
import TaskForm from './TaskForm';
import Task from './Task';
import Options from './Options';
import ConfirmAction from './ConfirmAction';
import TitleForm from './TitleForm';
import FolderList from './FolderList';
import uniqid from 'uniqid';

function Section({ title, tasks, edit, id }) {
	const [storage, setStorage] = useStorage();
	const [addTaskMode, setAddTaskMode] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const [showFolderList, setShowFolderList] = useState(false);
	const moreRef = useRef();
	const displayOptions = () => setShowOptions(true);
	const hideOptions = () => setShowOptions(false);
	const displayFolderList = () => setShowFolderList(true);
	const hideFolderList = () => setShowFolderList(false);
	const toggleConfirm = () => setShowConfirm((prev) => !prev);

	const enableAddTaskMode = () => setAddTaskMode(true);
	const disableAddTaskMode = () => setAddTaskMode(false);

	function handleSectionDelete(sectionId) {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.reduce(
								(reduced, section) => {
									if (section.id !== sectionId)
										reduced.push(section);
									return reduced;
								},
								[]
							),
					  }
					: folder
			)
		);
	}

	function enableSectionEdit(sectionId) {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							tasks: folder.tasks.map((task) => {
								return { ...task, edit: false };
							}),
							sections: folder.sections.map((section) =>
								section.id === sectionId
									? {
											...section,
											tasks: section.tasks.map((task) => {
												return { ...task, edit: false };
											}),
											edit: true,
									  }
									: section
							),
					  }
					: folder
			)
		);
	}

	function handleSectionEdit(sectionId, title) {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.map((section) =>
								section.id === sectionId
									? { ...section, edit: false, title: title }
									: section
							),
					  }
					: folder
			)
		);
	}

	function handleSectionMove(folderId, sectionId) {
		setStorage((folders) => {
				// storing the section to transfer
				let sectionToTransfer = {};
			for (let i = 0; i < folders.length; i++) {
				if (folders[i].active) {
					for (let y = 0; y < folders[i].sections.length; y++) {
						if (folders[i].sections[y].id === sectionId) {
							sectionToTransfer = folders[i].sections[y];
							break;
						}
					}
					break;
					}
				}

			return folders.map((folder) => {
				//if destination folder is the same as active folder, don't do anything
				if (folder.active && folder.id === folderId) return folder;

				if (folder.active) {
				// removing section to transfer from previous folder
					return {
						...folder,
						sections: folder.sections.reduce((reduced, section) => {
							if (section.id !== sectionId) reduced.push(section);
							return reduced;
						}, []),
					};
				}

				if (folder.id === folderId) {
				// moving it into a destination folder
					return {
						...folder,
						sections: [...folder.sections, sectionToTransfer],
					};
				}

				return folder;
			});
		});
	}

	function handleTaskSubmit(title, description, dueDate, sectionId) {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.map((section) =>
								section.id === sectionId
									? {
											...section,
											tasks: [
												...tasks,
												{
													title: title,
													description: description,
													dueDate: dueDate,
													completed: false,
													edit: false,
													id: uniqid(),
												},
											],
									  }
									: section
							),
					  }
					: folder
			)
		);
	}

	function handleComplete(taskId) {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.map((section) =>
								section.id === id
									? {
											...section,
											tasks: section.tasks.map((task) =>
												task.id === taskId
													? {
															...task,
															completed:
																!task.completed,
													  }
													: task
											),
									  }
									: section
							),
					  }
					: folder
			)
		);
	}

	function enableTaskEdit(taskId) {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							tasks: folder.tasks.map((task) => {
								return { ...task, edit: false };
							}),
							sections: folder.sections.map((section) =>
								section.id === id
									? {
											...section,
											tasks: section.tasks.map((task) =>
												task.id === taskId
													? { ...task, edit: true }
													: { ...task, edit: false }
											),
									  }
									: { ...section, edit: false }
							),
					  }
					: folder
			)
		);
	}

	function handleTaskEdit(taskId, title, description, dueDate) {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.map((section) =>
								section.id === id
									? {
											...section,
											tasks: section.tasks.map((task) =>
												task.id === taskId
													? {
															...task,
															title: title,
															description:
																description,
															dueDate: dueDate,
															edit: false,
													  }
													: task
											),
									  }
									: section
							),
					  }
					: folder
			)
		);
	}

	function handleTaskDelete(taskId) {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.map((section) =>
								section.id === id
									? {
											...section,
											tasks: tasks.reduce(
												(reduced, task) => {
													if (task.id !== taskId)
														reduced.push(task);
													return reduced;
												},
												[]
											),
									  }
									: section
							),
					  }
					: folder
			)
		);
	}

	function handleTaskDuplicate(taskId) {
		setStorage((prev) =>
			prev.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.map((section) =>
								section.id === id
									? {
											...section,
											tasks: section.tasks.reduce(
												(reduced, task) => {
													task.id === taskId
														? reduced.push(task, {
																...task,
																id: uniqid(),
														  })
														: reduced.push(task);
													return reduced;
												},
												[]
											),
									  }
									: section
							),
					  }
					: folder
			)
		);
	}

	return (
		<div className="section">
			{edit ? (
				<TitleForm
					handleCancel={() => {}}
					handleEdit={handleSectionEdit}
					oldTitle={title}
					id={id}
				/>
			) : (
				<div className="section_title">
					{title}
					<img
						className="more"
						ref={moreRef}
						src={dots}
						alt=""
						onClick={() => {
							hideFolderList();
							displayOptions();
						}}
					/>
					{showOptions && (
						<Options
							hideOptions={hideOptions}
							enableDelete={toggleConfirm}
							enableEdit={() => enableSectionEdit(id)}
							displayFolderList={displayFolderList}
							key={uniqid()}
							moreRef={moreRef}
							Delete
							Edit
							MoveSection
						/>
					)}
					{showFolderList && (
						<FolderList
							hideFolderList={hideFolderList}
							handleSectionMove={(folderId) =>
								handleSectionMove(folderId, id)
							}
							key={uniqid()}
							moreRef={moreRef}
						/>
					)}
					{showConfirm && (
						<ConfirmAction
							handleDelete={() => handleSectionDelete(id)}
							title={title}
							handleCancel={toggleConfirm}
						/>
					)}
				</div>
			)}

			<div className="section-tasks">
				{tasks.map((task) => {
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
							completed={task.completed}
							id={task.id}
							handleDelete={handleTaskDelete}
							handleDuplicate={handleTaskDuplicate}
							enableEdit={enableTaskEdit}
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
							sectionId={id}
						/>
					) : (
						<div className="add_task" onClick={enableAddTaskMode}>
							+ add task
						</div>
					)}
				</h3>
			</div>
		</div>
	);
}

export default Section;
