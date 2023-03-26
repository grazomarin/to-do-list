import React, { useState, useRef } from 'react';
import Options from './Options';
import ConfirmAction from './ConfirmAction';
import dots from '../assets/images/dots.svg';
import checkbox from '../assets/images/checkbox.svg';
import check from '../assets/images/check.svg';
import uniqid from 'uniqid';
import CalendarIcon from './icon_components/CalendarIcon';

function Task({
	title,
	description,
	dueDate,
	completed,
	id,
	handleDelete,
	enableEdit,
	handleComplete,
}) {
	const [showConfirm, setShowConfirm] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const moreRef = useRef();
	const displayOptions = () => setShowOptions(true);
	const hideOptions = () => setShowOptions(false);

	const toggleConfirm = () => setShowConfirm((prev) => !prev);

	return (
		<div className={`task ${completed ? 'completed' : ''}`}>
			<div className="checkbox-cont" onClick={() => handleComplete(id)}>
				<img src={checkbox} alt="" className="checkbox" />
				{completed && <img src={check} alt="" className="check" />}
			</div>
			<div className="info">
				<div className="title">{title}</div>
				{description && (
					<div className="description">{description}</div>
				)}
				{dueDate && (
					<div className="dueDate">
						<CalendarIcon />
						{dueDate}
					</div>
				)}
			</div>
			<img
				className="more"
				ref={moreRef}
				src={dots}
				alt=""
				onClick={displayOptions}
			/>
			{showOptions && (
				<Options
					hideOptions={hideOptions}
					toggleConfirm={toggleConfirm}
					enableEdit={() => enableEdit(id)}
					key={uniqid()}
					moreRef={moreRef}
				/>
			)}
			{showConfirm && (
				<ConfirmAction
					handleDelete={() => handleDelete(id)}
					title={title}
					toggleConfirm={toggleConfirm}
				/>
			)}
		</div>
	);
}

export default Task;
