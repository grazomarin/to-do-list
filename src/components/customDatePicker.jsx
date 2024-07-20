import { forwardRef } from 'react';
import CalendarIcon from './icon_components/calendarIcon';
import DatePicker from 'react-datepicker';
import { setHours, setMinutes } from 'date-fns';

function CustomDatePicker({ dueDate, setDueDate }) {
	return (
		<DatePicker
			startDate={dueDate}
			selected={dueDate}
			onChange={(date) => setDueDate(date)}
			showTimeSelect
			dateFormat='MMM dd, p'
			minDate={new Date()}
			minTime={new Date()}
			maxTime={setHours(setMinutes(new Date(), 59), 23)}
			customInput={<CustomDatePicker.customInput />}
			isClearable
			fixedHeight
		/>
	);
}

CustomDatePicker.customInput = forwardRef(({ value, onClick }, ref) => {
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
