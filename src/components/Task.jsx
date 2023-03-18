import React, { useState, useRef } from 'react';
import Options from './Options';
import ConfirmAction from './ConfirmAction';
import dots from '../assets/images/dots.svg';
import uniqid from 'uniqid';

function Task({ title, description, id, handleDelete }) {
	const [showConfirm, setShowConfirm] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const moreRef = useRef();
	const displayOptions = () => setShowOptions(true);
	const hideOptions = () => setShowOptions(false);

	const toggleConfirm = () => setShowConfirm((prev) => !prev);

	return (
		<div className="task">
			<div className="title">
				{title}
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
			<div className="description">{description}</div>
		</div>
	);
}

export default Task;
