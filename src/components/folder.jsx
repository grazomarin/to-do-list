import React, { useState, useRef } from 'react';
import Options from './options';
import ConfirmAction from './confirmAction';
import uniqid from 'uniqid';
import MoreIcon from './icon_components/moreIcon';

export default function Folder({
	folder,
	makeActive,
	handleDelete,
	handleDuplicate,
	handleAddToFavorites,
	handleRemoveFromFavorites,
	enableEdit,
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

	function returnNumOfTotalTasks() {
		let taskCount = 0;
		taskCount += folder.tasks.length;
		for (let i = 0; i < folder.sections.length; i++) {
			taskCount += folder.sections[i].tasks.length;
		}
		return taskCount;
	}

	function returnNumOfCompletedTasks() {
		let completedCount = 0;
		for (let i = 0; i < folder.tasks.length; i++) {
			folder.tasks[i].completed ? completedCount++ : null;
		}
		for (let i = 0; i < folder.sections.length; i++) {
			for (let y = 0; y < folder.sections[i].tasks.length; y++) {
				folder.sections[i].tasks[y].completed ? completedCount++ : null;
			}
		}
		return completedCount;
	}

	return (
		<div
			className={`folder${folder.active ? '__active' : ''}`}
			onClick={() => makeActive(folder.id)}
		>
			<div
				className="bullet"
				style={{ backgroundColor: folder.color }}
			></div>
			<span className="folder--title">{folder.title}</span>
			<div className="folder--tasks-count">
				{returnNumOfCompletedTasks()}/{returnNumOfTotalTasks()}
			</div>
			<MoreIcon handleClick={displayOptions} ref={moreRef} />
			{showOptions && (
				<Options
					hideOptions={hideOptions}
					enableDelete={toggleConfirm}
					enableEdit={() => enableEdit(folder.id)}
					handleDuplicate={() => handleDuplicate(folder.id)}
					handleAddToFavorites={() => handleAddToFavorites(folder.id)}
					handleRemoveFromFavorites={() =>
						handleRemoveFromFavorites(folder.id)
					}
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
					handleDelete={() => handleDelete(folder.id)}
					title={folder.title}
					handleCancel={toggleConfirm}
				/>
			)}
		</div>
	);
}
