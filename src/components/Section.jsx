import React, { useState, useRef } from 'react';
import { useStorage } from './contexts/StorageContext';
import TaskForm from './TaskForm';
import Task from './Task';
import Options from './Options';
import ConfirmAction from './ConfirmAction';
import dots from '../assets/images/dots.svg';
import uniqid from 'uniqid';
import TitleForm from './TitleForm';

function Section({ title, tasks, edit, id }) {
	const [storage, setStorage] = useStorage();
	const [addTaskMode, setAddTaskMode] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const moreRef = useRef();
	const displayOptions = () => setShowOptions(true);
	const hideOptions = () => setShowOptions(false);
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
						onClick={displayOptions}
					/>
					{showOptions && (
						<Options
							hideOptions={hideOptions}
							enableDelete={toggleConfirm}
							enableEdit={() => enableSectionEdit(id)}
							// handleDuplicate={() => handleDuplicate(id)}
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
