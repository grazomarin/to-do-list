import React, { useState, useRef, useEffect, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes, format, parse } from 'date-fns';
import calendar from '../assets/images/calendar.svg';
import CalendarIcon from './icon_components/CalendarIcon';

function TaskForm({
	oldTitle,
	oldDescription,
	oldDate,
	taskId,
	sectionId,
	disableAddMode,
	handleEdit,
	handleSubmit,
}) {
	const [title, setTitle] = useState(oldTitle || '');
	const [description, setDescription] = useState(oldDescription || '');
	const [dueDate, setDueDate] = useState(parseDate(oldDate));
	const [displayError, setDisplayError] = useState(false);
	const DateSelector = forwardRef(({ value, onClick }, ref) => (
		<button
			className="dateSelectorButton"
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
				<button
					className="submit"
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						if (title) {
							taskId
								? handleEdit(
										taskId,
										title,
										description,
										formatDate(dueDate),
										sectionId
								  )
								: handleSubmit(
										title,
										description,
										formatDate(dueDate),
										sectionId
								  );
							disableAddMode();
							resetValues();
						} else throwError();
					}}
				>
					Submit
				</button>
				<button
					className="cancel"
					type="reset"
					onClick={() => {
						taskId
							? handleEdit(
									taskId,
									oldTitle,
									oldDescription,
									oldDate
							  )
							: disableAddMode();
					}}
				>
					Cancel
				</button>
			</div>
			{displayError && <div className="error">Enter a valid title!</div>}
		</form>
	);
}

export default TaskForm;
