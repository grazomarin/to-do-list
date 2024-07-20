import React, { useState } from 'react';
import Options from './options';
import ConfirmationModal from './confrimationModal';
import CalendarIcon from './icon_components/calendarIcon';
import CheckBoxIcon from './icon_components/checkboxIcon';
import PriorityPicker from './priorityPicker';
import CustomDatePicker from './customDatePicker';
import { useDispatch } from 'react-redux';
import { format, parse } from 'date-fns';
import {
	addTask,
	editTask,
	toggleIsCompleteTask,
	duplicateTask,
	deleteTask,
} from '../storage/storage';

function Task({ task, enableEdit }) {
	const [showConfirmationModal, setShowConfirmationModal] = useState(false);
	const dispatch = useDispatch();
	const { id } = task;

	return (
		<div className={task.completed ? 'task__completed' : 'task'}>
			<CheckBoxIcon
				priorityColor={task.priorityColor}
				completed={task.isCompleted}
				handleComplete={() => dispatch(toggleIsCompleteTask({ id }))}
			/>

			<div className='task--info'>
				<div className='task--info--title'>{task.title}</div>
				{task.description && (
					<div className='task--info--description'>{task.description}</div>
				)}
				{task.dueDateString && (
					<div className='task--info--due-date'>
						<CalendarIcon />
						{task.dueDateString}
					</div>
				)}
			</div>

			<Options>
				<Options.Option text='Edit' handleClick={enableEdit} />
				<Options.Option
					text='Delete'
					handleClick={() => setShowConfirmationModal(true)}
				/>
				<Options.Option
					text='Duplicate'
					handleClick={() => dispatch(duplicateTask({ id }))}
				/>
			</Options>

			{showConfirmationModal && (
				<ConfirmationModal
					title={task.title}
					handleDelete={() => dispatch(deleteTask({ id }))}
					handleCancel={() => setShowConfirmationModal(false)}
				/>
			)}
		</div>
	);
}

Task.Form = ({ task, disableForm }) => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState(task?.title || '');
	const [description, setDescription] = useState(task?.description || '');
	const [dueDate, setDueDate] = useState(toFormattedDate(task?.dueDateString));
	const [priorityColor, setPriorityColor] = useState(
		task?.priorityColor || '#808080'
	);
	const [showError, setShowError] = useState(false);

	function toFormattedDateString(date) {
		return date ? format(date, 'MMM dd, hh:mm a') : '';
	}

	function toFormattedDate(string) {
		return string ? parse(string, 'MMM dd, hh:mm a', new Date()) : null;
	}

	function throwError() {
		setShowError(true);
		setTimeout(() => setShowError(false), 2000);
	}

	function isFormValid() {
		return title.trim() !== '';
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (isFormValid()) {
			task
				? dispatch(
						editTask({
							id: task.id,
							title,
							priorityColor,
							description,
							dueDateString: toFormattedDateString(dueDate),
						})
				  )
				: dispatch(
						addTask({
							title,
							priorityColor,
							description,
							dueDateString: toFormattedDateString(dueDate),
						})
				  );
			disableForm();
		} else {
			throwError();
		}
	}

	return (
		<form>
			<div className='input'>
				<div className='input-cont'>
					<input
						type='text'
						name='title'
						value={title}
						onInput={(e) => setTitle(e.target.value)}
						placeholder='Title'
					/>
					<textarea
						name='description'
						id='description'
						rows='3'
						value={description}
						onInput={(e) => setDescription(e.target.value)}
						placeholder='Details...'
					></textarea>
				</div>
				<div className='buttons'>
					<CustomDatePicker dueDate={dueDate} setDueDate={setDueDate} />
					<PriorityPicker
						priorityColor={priorityColor}
						setPriorityColor={setPriorityColor}
					/>
					<button
						className='buttons--submit'
						type='submit'
						onClick={handleSubmit}
					>
						{task ? 'Edit' : 'Add'}
					</button>
					<button
						className='buttons--cancel'
						type='reset'
						onClick={disableForm}
					>
						Cancel
					</button>
				</div>
			</div>
			{showError && <div className='error-message'>Enter a valid title!</div>}
		</form>
	);
};

export default Task;
