import React, { useState } from 'react';
import Task from './task';
import Section from './section';
import { useSelector } from 'react-redux';

function Tasks() {
	const activeFolderId = useSelector((state) => state.todo.activeFolderId);
	const folder = useSelector((state) =>
		state.todo.folders.find((folder) => folder.id === activeFolderId)
	);
	const [editTaskId, setEditTaskId] = useState(null);
	const [isTaskFormActive, setIsTaskFormActive] = useState(false);
	const [isAddSectionFormActive, setIsAddSectionFormActive] = useState(false);

	if (!folder) return <h2 className='not-selected'>No Folder Selected</h2>;

	return (
		<div className='main'>
			<div className='main--title' style={{ color: folder.color }}>
				{folder.title}
			</div>
			<div className='main--tasks'>
				{folder.sections.map((section) => (
					<Section section={section} key={section.id} />
				))}
				{folder.tasks.map((task) =>
					task.id === editTaskId ? (
						<Task.Form
							task={task}
							disableForm={() => setEditTaskId(false)}
							key={task.id}
						/>
					) : (
						<Task
							task={task}
							enableEdit={() => setEditTaskId(task.id)}
							key={task.id}
						/>
					)
				)}
				<h3 className='add'>
					{isTaskFormActive ? (
						<Task.Form disableForm={() => setIsTaskFormActive(false)} />
					) : (
						<div
							className='add--task'
							onClick={() => setIsTaskFormActive(true)}
						>
							+ add task
						</div>
					)}
					{isAddSectionFormActive ? (
						<Section.Form
							disableForm={() => setIsAddSectionFormActive(false)}
						/>
					) : (
						<div
							className='add--section'
							onClick={() => setIsAddSectionFormActive(true)}
						>
							<div className='add--section--decoration'></div>
							<div className='add--section--text'>Add Section</div>
							<div className='add--section--decoration'></div>
						</div>
					)}
				</h3>
			</div>
		</div>
	);
}

export default Tasks;
