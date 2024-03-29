import React, { useState, useRef } from 'react';
import { useStorage } from './contexts/storageContext';
import TaskForm from './taskForm';
import Task from './task';
import Options from './options';
import ConfirmAction from './confirmAction';
import TitleForm from './titleForm';
import FolderList from './folderList';
import uniqid from 'uniqid';
import MoreIcon from './icon_components/moreIcon';
import ArrowIcon from './icon_components/arrowIcon';

export default function Section({ section, id }) {
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
		setStorage((folders) =>
			folders.map((folder) =>
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
		setStorage((folders) =>
			folders.map((folder) =>
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

	function handleSectionEdit(updates) {
		setStorage((folders) =>
			folders.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.map((section) =>
								section.id === sectionId
									? Object.assign(section, {
											...updates,
											edit: false,
									  })
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

	function handleTaskSubmit(data) {
		setStorage((folders) =>
			folders.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.map((section) =>
								section.id === id
									? {
											...section,
											tasks: [
												...section.tasks,
												{
													...data,
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
		setStorage((folders) =>
			folders.map((folder) =>
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
		setStorage((folders) =>
			folders.map((folder) =>
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

	function handleTaskEdit(taskId, updates) {
		setStorage((folders) =>
			folders.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.map((section) =>
								section.id === id
									? {
											...section,
											tasks: section.tasks.map((task) =>
												task.id === taskId
													? Object.assign(task, {
															...updates,
															edit: false,
													  })
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
		setStorage((folders) =>
			folders.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.map((section) =>
								section.id === id
									? {
											...section,
											tasks: section.tasks.reduce(
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
		setStorage((folders) =>
			folders.map((folder) =>
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

	function updateSectionFold(value) {
		setStorage((folders) =>
			folders.map((folder) =>
				folder.active
					? {
							...folder,
							sections: folder.sections.map((section) =>
								section.id === id
									? { ...section, folded: value }
									: section
							),
					  }
					: folder
			)
		);
	}

	return (
		<div className='section'>
			{section.edit ? (
				<TitleForm
					handleCancel={() => {}}
					handleEdit={handleSectionEdit}
					data={section}
					id={id}
					Inline
				/>
			) : (
				<div className='section--title'>
					<ArrowIcon
						folded={section.folded}
						handleClick={() => updateSectionFold(!section.folded)}
					/>
					{section.title}
					<MoreIcon
						handleClick={() => {
							hideFolderList();
							displayOptions();
						}}
						ref={moreRef}
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
							title={section.title}
							handleCancel={toggleConfirm}
						/>
					)}
				</div>
			)}

			{!section.folded && (
				<div className='section--tasks'>
					{section.tasks.map((task) => {
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

					<h3 className='add'>
						{addTaskMode ? (
							<TaskForm
								handleCancel={disableAddTaskMode}
								handleSubmit={handleTaskSubmit}
							/>
						) : (
							<div
								className='add--task'
								onClick={enableAddTaskMode}
							>
								+ add task
							</div>
						)}
					</h3>
				</div>
			)}
		</div>
	);
}
