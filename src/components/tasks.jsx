import { useState } from 'react';
import Task from './task';
import Section from './section';
import { useDispatch, useSelector } from 'react-redux';
import {
	addTask,
	editTask,
	deleteTask,
	duplicateTask,
	toggleCompleteTask,
} from '../storage/storage';

function Tasks() {
	const activeFolderId = useSelector((state) => state.todo.activeFolderId);
	const folder = useSelector((state) =>
		state.todo.folders.find((folder) => folder.id === activeFolderId)
	);
	const [editTaskId, setEditTaskId] = useState(null);
	const [editSectionId, setEditSectionId] = useState(null);
	const [isTaskFormActive, setIsTaskFormActive] = useState(false);
	const [isSectionFormActive, setIsSectionFormActive] = useState(false);
	const dispatch = useDispatch();

	if (!folder) return <h2 className='not-selected'>No Folder Selected</h2>;

	return (
		<div className='main'>
			<div className='main--title' style={{ color: folder.color }}>
				{folder.title}
			</div>
			<div className='main--tasks'>
				{folder.tasks.map((task) =>
					task.id === editTaskId ? (
						<Task.Form
							task={task}
							disableForm={() => setEditTaskId(false)}
							addTask={(task) => dispatch(addTask(task))}
							editTask={(task) => dispatch(editTask(task))}
							key={task.id}
						/>
					) : (
						<Task
							task={task}
							enableEdit={() => setEditTaskId(task.id)}
							toggleCompleteTask={(id) => dispatch(toggleCompleteTask({ id }))}
							duplicateTask={(id) => dispatch(duplicateTask({ id }))}
							deleteTask={(id) => dispatch(deleteTask({ id }))}
							key={task.id}
						/>
					)
				)}
				<h3 className='add'>
					{isTaskFormActive ? (
						<Task.Form
							disableForm={() => setIsTaskFormActive(false)}
							addTask={(task) => dispatch(addTask(task))}
							editTask={(task) => dispatch(editTask(task))}
						/>
					) : (
						<div className='add--task' onClick={() => setIsTaskFormActive(true)}>
							+ add task
						</div>
					)}
					{isSectionFormActive ? (
						<Section.Form disableForm={() => setIsSectionFormActive(false)} />
					) : (
						<div className='add--section' onClick={() => setIsSectionFormActive(true)}>
							<div className='add--section--decoration'></div>
							<div className='add--section--text'>Add Section</div>
							<div className='add--section--decoration'></div>
						</div>
					)}
				</h3>
				{folder.sections.map((section) => (
					<Section
						section={section}
						edit={editSectionId === section.id}
						setEditSectionId={setEditSectionId}
						key={section.id}
					/>
				))}
			</div>
		</div>
	);
}

export default Tasks;
