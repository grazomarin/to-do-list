import React, { useState, useRef } from 'react';
import Options from './Options';
import ConfirmAction from './ConfirmAction';
import MoreIcon from './icon_components/MoreIcon';
import uniqid from 'uniqid';
import CalendarIcon from './icon_components/CalendarIcon';
import CheckBoxIcon from './icon_components/CheckboxIcon';

export default function Task({
	title,
	description,
	dueDate,
	priority,
	completed,
	id,
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
		<div className={`task${completed ? '__completed' : ''}`}>
			<CheckBoxIcon
				priority={priority}
				completed={completed}
				handleComplete={() => handleComplete(id)}
			/>

			<div className="task--info">
				<div className="task--info--title">{title}</div>
				{description && (
					<div className="task--info--description">{description}</div>
				)}
				{dueDate && (
					<div className="task--info--due-date">
						<CalendarIcon />
						{dueDate}
					</div>
				)}
			</div>
			<MoreIcon handleClick={displayOptions} ref={moreRef} />
			{showOptions && (
				<Options
					hideOptions={hideOptions}
					enableDelete={toggleConfirm}
					handleDuplicate={() => handleDuplicate(id)}
					enableEdit={() => enableEdit(id)}
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
					handleDelete={() => handleDelete(id)}
					title={title}
					handleCancel={toggleConfirm}
				/>
			)}
		</div>
	);
}
