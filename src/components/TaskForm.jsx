import React, { useState, useRef, useEffect, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes, format } from 'date-fns';

function TaskForm({
	oldTitle,
	oldDescription,
	id,
	disableAddMode,
	handleEdit,
	handleSubmit,
}) {
	const [title, setTitle] = useState(oldTitle || '');
	const [description, setDescription] = useState(oldDescription || '');
	const [dueDate, setDueDate] = useState(new Date());
	const DateSelector = forwardRef(({ value, onClick }, ref) => (
		<button
			className="dateSelectorButton"
			onClick={onClick}
			ref={ref}
			type="button"
		>
			{value || 'No due date selected'}
		</button>
	));

	const inputRef = useRef(null);

	const resetValues = () => {
		setTitle('');
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	function formatDate() {
		return format(dueDate, 'MMM dd, hh:mm a');
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
				<DatePicker
					selected={dueDate}
					onChange={(date) => setDueDate(date)}
					showTimeSelect
					dateFormat="MMM dd, p"
					minDate={new Date()}
					minTime={new Date()}
					maxTime={setHours(setMinutes(new Date(), 59), 23)}
					customInput={<DateSelector />}
					isClearable
					monthsShown={1}
				/>
			</div>
			<div className="buttons">
				<button
					className="submit"
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						id
							? handleEdit(id, title, description, formatDate())
							: handleSubmit(title, description, formatDate());
						disableAddMode();
						resetValues();
					}}
				>
					Submit
				</button>
				<button
					className="cancel"
					type="reset"
					onClick={() => {
						id
							? handleEdit(
									id,
									oldTitle,
									oldDescription,
									formatDate()
							  )
							: disableAddMode();
					}}
				>
					Cancel
				</button>
			</div>
		</form>
	);
}

export default TaskForm;
