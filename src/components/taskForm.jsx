import React, { useState, useRef, useEffect, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import PriorityPicker from './priorityPicker';
import { setHours, setMinutes, format, parse } from 'date-fns';
import CalendarIcon from './icon_components/calendarIcon';

export default function TaskForm({
	task,
	handleCancel,
	handleEdit,
	handleSubmit,
}) {
	const [title, setTitle] = useState(task?.title || '');
	const [description, setDescription] = useState(task?.description || '');
	const [dueDate, setDueDate] = useState(parseDate(task?.date));
	const [priority, setPriority] = useState(task?.priority || '#808080');
	const [displayError, setDisplayError] = useState(false);

	const DateSelector = forwardRef(({ value, onClick }, ref) => (
		<button
			className="date-selector-button"
			onClick={onClick}
			ref={ref}
			type="button"
		>
			<CalendarIcon />
			<span>{value || 'No due date selected'}</span>
		</button>
	));

	const inputRef = useRef(null);

	const resetValues = () => {
		setTitle('');
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	function formatDate(date) {
		return date ? format(dueDate, 'MMM dd, hh:mm a') : null;
	}

	function parseDate(date) {
		return date ? parse(date, 'MMM dd, hh:mm a', new Date()) : null;
	}

	function throwError() {
		setDisplayError(true);
		setTimeout(() => setDisplayError(false), 2000);
	}

	return (
		<form>
			<div className="input">
				<div className="input-cont">
					<input
						type="text"
						name="title"
						ref={inputRef}
						value={title}
						onInput={(e) => setTitle(e.target.value)}
						placeholder="Title"
					/>
					<textarea
						name="description"
						id="description"
						rows="3"
						value={description}
						onInput={(e) => setDescription(e.target.value)}
						placeholder="Details..."
					></textarea>
				</div>
				<div className="buttons">
					<DatePicker
						startDate={dueDate}
						selected={dueDate}
						onChange={(date) => setDueDate(date)}
						showTimeSelect
						dateFormat="MMM dd, p"
						minDate={new Date()}
						minTime={new Date()}
						maxTime={setHours(setMinutes(new Date(), 59), 23)}
						customInput={<DateSelector />}
						isClearable
						fixedHeight
						monthsShown={1}
					/>
					<PriorityPicker
						priority={priority}
						handleClick={setPriority}
					/>
					<button
						className="buttons--submit"
						type="submit"
						onClick={(e) => {
							e.preventDefault();
							if (title) {
								task?.id
									? handleEdit(task.id, {
											title,
											description,
											dueDate: formatDate(dueDate),
											priority,
									  })
									: handleSubmit({
											title,
											description,
											dueDate: formatDate(dueDate),
											priority,
									  });
								handleCancel();
								resetValues();
							} else throwError();
						}}
					>
						Submit
					</button>
					<button
						className="buttons--cancel"
						type="reset"
						onClick={() => {
							task?.id ? handleEdit(task) : handleCancel();
						}}
					>
						Cancel
					</button>
				</div>
			</div>
			{displayError && (
				<div className="error-message">Enter a valid title!</div>
			)}
		</form>
	);
}
