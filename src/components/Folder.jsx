import React, { useState, useRef } from 'react';
import Options from './Options';
import ConfirmAction from './ConfirmAction';
import dots from '../assets/images/dots.svg';
import uniqid from 'uniqid';

function Folder({
	title,
	active,
	tasks,
	sections,
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

	function returnNumOfTotalTasks() {
		let taskCount = 0;
		taskCount += tasks.length;
		for (let i = 0; i < sections.length; i++) {
			taskCount += sections[i].tasks.length;
		}
		return taskCount;
	}

	function returnNumOfCompletedTasks() {
		let completedCount = 0;
		for (let i = 0; i < tasks.length; i++) {
			tasks[i].completed ? completedCount++ : null;
		}
		for (let i = 0; i < sections.length; i++) {
			for (let y = 0; y < sections[i].tasks.length; y++) {
				sections[i].tasks[y].completed ? completedCount++ : null;
			}
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
				{returnNumOfCompletedTasks()}/{returnNumOfTotalTasks()}
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
					enableDelete={toggleConfirm}
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
					handleCancel={toggleConfirm}
				/>
			)}
		</div>
	);
}

export default Folder;
