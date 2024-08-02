import { useState } from 'react';
import Task from './task';
import Options from './options';
import FolderPicker from './folderList';
import ArrowIcon from './icon_components/arrowIcon';
import {
	addSection,
	addTask,
	deleteSection,
	deleteTask,
	duplicateTask,
	editSection,
	editTask,
	foldSection,
	moveSection,
	toggleCompleteTask,
} from '../storage/storage';
import FormButtons from './formButtons';
import { useDispatch } from 'react-redux';
import ConfirmationModal from './confrimationModal';

function Section({ section, edit, setEditSectionId }) {
	const [showConfirmationModal, setShowConfirmationModal] = useState(false);
	const [showFolderPicker, setShowFolderPicker] = useState(false);
	const [isTaskFormActive, setIsTaskFormActive] = useState(false);
	const [editTaskId, setEditTaskId] = useState(null);
	const dispatch = useDispatch();
	const { id, folded, title, tasks } = section;

	return (
		<div className='section'>
			{edit ? (
				<Section.Form section={section} disableForm={() => setEditSectionId(null)} />
			) : (
				<div className='section--title'>
					<ArrowIcon folded={folded} handleClick={() => dispatch(foldSection({ id }))} />
					{title}
					<Options>
						<Options.Option text='Edit' handleClick={() => setEditSectionId(id)} />
						<Options.Option text='Move' handleClick={() => setShowFolderPicker(true)} />
						<Options.Option text='Delete' handleClick={() => setShowConfirmationModal(true)} />
					</Options>
					{showFolderPicker && (
						<FolderPicker
							setShowFolderPicker={setShowFolderPicker}
							handleSectionMove={(folderId) => dispatch(moveSection({ id, folderId }))}
						/>
					)}
					{showConfirmationModal && (
						<ConfirmationModal
							title={title}
							handleDelete={() => dispatch(deleteSection({ id }))}
							handleCancel={() => setShowConfirmationModal(false)}
						/>
					)}
				</div>
			)}
			{!folded && (
				<div className='section--tasks'>
					{tasks.map((task) => {
						return task.id === editTaskId ? (
							<Task.Form
								task={task}
								disableForm={() => setEditTaskId(null)}
								addTask={(task) => dispatch(addTask({ ...task, sectionId: id }))}
								editTask={(task) => dispatch(editTask({ ...task, sectionId: id }))}
								key={task.id}
							/>
						) : (
							<Task
								task={task}
								enableEdit={() => setEditTaskId(task.id)}
								toggleCompleteTask={(taskId) =>
									dispatch(toggleCompleteTask({ id: taskId, sectionId: id }))
								}
								duplicateTask={(taskId) => dispatch(duplicateTask({ id: taskId, sectionId: id }))}
								deleteTask={(taskId) => dispatch(deleteTask({ id: taskId, sectionId: id }))}
								key={task.id}
							/>
						);
					})}

					<h3 className='add'>
						{isTaskFormActive ? (
							<Task.Form
								disableForm={() => setIsTaskFormActive(false)}
								addTask={(task) =>
									dispatch(
										addTask({
											...task,
											sectionId: id,
										})
									)
								}
								editTask={(task) =>
									dispatch(
										editTask({
											...task,
											sectionId: id,
										})
									)
								}
							/>
						) : (
							<div className='add--task' onClick={() => setIsTaskFormActive(true)}>
								+ add task
							</div>
						)}
					</h3>
				</div>
			)}
		</div>
	);
}

Section.Form = function SectionForm({ section, disableForm }) {
	const [title, setTitle] = useState(section?.title || '');
	const [showError, setShowError] = useState(false);
	const dispatch = useDispatch();

	function isFormValid() {
		return title.trim() !== '';
	}

	function throwError() {
		setShowError(true);
		setTimeout(() => setShowError(false), 2000);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (isFormValid()) {
			section ? dispatch(editSection({ id: section.id, title })) : dispatch(addSection({ title }));
			disableForm();
		} else {
			throwError();
		}
	}

	return (
		<form>
			<div className='input__inline'>
				<div className='input-cont'>
					<input
						type='text'
						name='title'
						value={title}
						onInput={(e) => setTitle(e.target.value)}
						placeholder='Title'
					/>
				</div>
				<FormButtons handleSubmit={handleSubmit} disableForm={disableForm} data={section} />
			</div>
			{showError && <div className='error'>Title cannot be empty</div>}
		</form>
	);
};

export default Section;
