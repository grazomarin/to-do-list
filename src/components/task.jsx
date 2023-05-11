import React, { useState, useRef } from 'react';
import Options from './options';
import ConfirmAction from './confirmAction';
import MoreIcon from './icon_components/moreIcon';
import uniqid from 'uniqid';
import CalendarIcon from './icon_components/calendarIcon';
import CheckBoxIcon from './icon_components/checkboxIcon';

export default function Task({
	task,
	handleDelete,
	handleDuplicate,
	enableEdit,
	handleComplete,
	Delete,
	Edit,
	Duplicate,
	AddFavorite,
	RemoveFavorite,
}) {
	const [showConfirm, setShowConfirm] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const moreRef = useRef();
	const displayOptions = () => setShowOptions(true);
	const hideOptions = () => setShowOptions(false);

	const toggleConfirm = () => setShowConfirm((prev) => !prev);

	return (
		<div className={`task${task.completed ? '__completed' : ''}`}>
			<CheckBoxIcon
				priority={task.priority}
				completed={task.completed}
				handleComplete={() => handleComplete(task.id)}
			/>

			<div className="task--info">
				<div className="task--info--title">{task.title}</div>
				{task.description && (
					<div className="task--info--description">
						{task.description}
					</div>
				)}
				{task.dueDate && (
					<div className="task--info--due-date">
						<CalendarIcon />
						{task.dueDate}
					</div>
				)}
			</div>
			<MoreIcon handleClick={displayOptions} ref={moreRef} />
			{showOptions && (
				<Options
					hideOptions={hideOptions}
					enableDelete={toggleConfirm}
					handleDuplicate={() => handleDuplicate(task.id)}
					enableEdit={() => enableEdit(task.id)}
					key={uniqid()}
					moreRef={moreRef}
					Delete={Delete}
					Edit={Edit}
					Duplicate={Duplicate}
					AddFavorite={AddFavorite}
					RemoveFavorite={RemoveFavorite}
				/>
			)}
			{showConfirm && (
				<ConfirmAction
					handleDelete={() => handleDelete(task.id)}
					title={task.title}
					handleCancel={toggleConfirm}
				/>
			)}
		</div>
	);
}
