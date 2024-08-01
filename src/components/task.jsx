import { useState } from 'react';
import Options from './options';
import ConfirmationModal from './confrimationModal';
import CalendarIcon from './icon_components/calendarIcon';
import CheckBoxIcon from './icon_components/checkboxIcon';
import PriorityPicker from './priorityPicker';
import CustomDatePicker from './customDatePicker';
import FormButtons from './formButtons';
import { format, parse } from 'date-fns';

function Task({ task, enableEdit, toggleCompleteTask, duplicateTask, deleteTask }) {
	const [showConfirmationModal, setShowConfirmationModal] = useState(false);
	const { id } = task;

	return (
		<div className={task.isCompleted ? 'task__completed' : 'task'}>
			<CheckBoxIcon
				priorityColor={task.priorityColor}
				completed={task.isCompleted}
				handleComplete={() => toggleCompleteTask(id)}
			/>

			<div className='task--info'>
				<div className='task--info--title'>{task.title}</div>
				{task.description && <div className='task--info--description'>{task.description}</div>}
				{task.dueDateString && (
					<div className='task--info--due-date'>
						<CalendarIcon />
						{task.dueDateString}
					</div>
				)}
			</div>

			<Options>
				<Options.Option text='Edit' handleClick={enableEdit} />
				<Options.Option text='Delete' handleClick={() => setShowConfirmationModal(true)} />
				<Options.Option text='Duplicate' handleClick={() => duplicateTask({ id })} />
			</Options>

			{showConfirmationModal && (
				<ConfirmationModal
					title={task.title}
					handleDelete={() => deleteTask(id)}
					handleCancel={() => setShowConfirmationModal(false)}
				/>
			)}
		</div>
	);
}

Task.Form = function TaskForm({ task, disableForm, addTask, editTask }) {
	const [title, setTitle] = useState(task?.title || '');
	const [description, setDescription] = useState(task?.description || '');
	const [dueDate, setDueDate] = useState(toFormattedDate(task?.dueDateString));
	const [priorityColor, setPriorityColor] = useState(task?.priorityColor || '#808080');
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
		console.log(toFormattedDateString(dueDate));
		e.preventDefault();
		if (isFormValid()) {
			task
				? editTask({
						id: task.id,
						title,
						priorityColor,
						description,
						dueDateString: toFormattedDateString(dueDate),
				  })
				: addTask({
						title,
						priorityColor,
						description,
						dueDateString: toFormattedDateString(dueDate),
				  });
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
						placeholder='Details...'></textarea>
				</div>
				<FormButtons handleSubmit={handleSubmit} disableForm={disableForm} data={task}>
					<CustomDatePicker dueDate={dueDate} setDueDate={setDueDate} />
					<PriorityPicker priorityColor={priorityColor} setPriorityColor={setPriorityColor} />
				</FormButtons>
			</div>
			{showError && <div className='error-message'>Enter a valid title!</div>}
		</form>
	);
};

export default Task;
