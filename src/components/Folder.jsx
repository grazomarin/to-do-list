import React, { useState, useRef } from 'react';
import Options from './Options';
import ConfirmAction from './ConfirmAction';
import dots from '../assets/images/dots.svg';
import uniqid from 'uniqid';

function Folder({
	title,
	active,
	tasks,
	id,
	makeActive,
	handleDelete,
	handleDuplicate,
	enableEdit,
}) {
	const [showConfirm, setShowConfirm] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const moreRef = useRef();
	const displayOptions = () => setShowOptions(true);
	const hideOptions = () => setShowOptions(false);

	const toggleConfirm = () => setShowConfirm((prev) => !prev);

	function returnNumOfCompletedTasks() {
		let completedCount = 0;
		for (let i = 0; i < tasks.length; i++) {
			tasks[i].completed ? completedCount++ : null;
		}
		return completedCount;
	}

	return (
		<div
			className={`folder ${active ? 'active' : ''}`}
			onClick={() => makeActive(id)}
		>
			<div className="bullet"></div>
			<span className="title">{title}</span>
			<div className="tasksCount">
				{returnNumOfCompletedTasks()}/{tasks.length}
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
					handleDuplicate={() => handleDuplicate(id)}
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

export default Folder;
