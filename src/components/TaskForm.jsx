import React, { useState, useRef, useEffect, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import PriorityPicker from './PriorityPicker';
import { setHours, setMinutes, format, parse } from 'date-fns';
import CalendarIcon from './icon_components/CalendarIcon';
import { useTheme } from './contexts/ThemeContext';

function TaskForm({
	oldTitle,
	oldDescription,
	oldDate,
	oldPriority,
	taskId,
	sectionId,
	handleCancel,
	handleEdit,
	handleSubmit,
}) {
	const [title, setTitle] = useState(oldTitle || '');
	const [description, setDescription] = useState(oldDescription || '');
	const [dueDate, setDueDate] = useState(parseDate(oldDate));
	const [priority, setPriority] = useState(oldPriority || '#808080');
	const [displayError, setDisplayError] = useState(false);
	const [theme, setTheme] = useTheme();
	const DateSelector = forwardRef(({ value, onClick }, ref) => (
		<button
			className={`dateSelectorButton ${theme == 'dark' ? 'dark' : ''}`}
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
		<form className={theme == 'dark' ? 'dark' : ''}>
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
				<div className={`buttons ${theme == 'dark' ? 'dark' : ''}`}>
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
											priority,
											sectionId //if the form is called from section component, then sectionId is also submitted
									  )
									: handleSubmit(
											title,
											description,
											formatDate(dueDate),
											priority,
											sectionId
									  );
								handleCancel();
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
										oldDate,
										oldPriority
								  )
								: handleCancel();
						}}
					>
						Cancel
					</button>
				</div>
			</div>
			{displayError && <div className="error">Enter a valid title!</div>}
		</form>
	);
}

export default TaskForm;
