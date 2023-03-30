import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import { useStorage } from './contexts/StorageContext';
import uniqid from 'uniqid';

function Section({ title, tasks, id }) {
	const [addTaskMode, setAddTaskMode] = useState(false);
	const [storage, setStorage] = useStorage();

	const enableAddTaskMode = () => setAddTaskMode(true);
	const disableAddTaskMode = () => setAddTaskMode(false);

	function handleSectionTaskSubmit(title, description, dueDate, sectionId) {
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
		console.log(storage);
	}

	return (
		<div className="section">
			<div className="section_title">{title}</div>

			<div className="section-tasks">
				{tasks.map((task) => {
					return (
						<Task
							title={task.title}
							description={task.description}
							dueDate={task.dueDate}
							id={task.id}
							completed={task.completed}
							// handleDelete={handleDelete}
							// handleDuplicate={
							// 	handleDuplicate
							// }
							// enableEdit={enableEdit}
							// handleComplete={handleComplete}
							key={task.id}
						/>
					);
				})}

				<h3 className="add">
					{addTaskMode ? (
						<TaskForm
							disableAddMode={disableAddTaskMode}
							handleSubmit={handleSectionTaskSubmit}
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
