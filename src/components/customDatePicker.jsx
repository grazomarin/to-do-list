import { forwardRef } from 'react';
import CalendarIcon from './icon_components/calendarIcon';
import DatePicker from 'react-datepicker';

function CustomDatePicker({ dueDate, setDueDate }) {
	const filterPassedTime = (time) => {
		const currentDate = new Date();
		const selectedDate = new Date(time);

		return currentDate.getTime() < selectedDate.getTime();
	};

	return (
		<DatePicker
			startDate={dueDate}
			selected={dueDate}
			onChange={(date) => setDueDate(date)}
			showTimeSelect
			dateFormat='MMM dd, p'
			filterTime={filterPassedTime}
			customInput={<CustomDatePicker.customInput />}
			isClearable
			fixedHeight
		/>
	);
}

CustomDatePicker.customInput = forwardRef(function DatePickerCustomInput ({ value, onClick }, ref)  {
	return (
		<button
			className='date-selector-button'
			onClick={onClick}
			ref={ref}
			type='button'
		>
			<CalendarIcon />
			<span>{value || 'No due date selected'}</span>
		</button>
	);
});

export default CustomDatePicker;
