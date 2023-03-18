import React, { useState, useRef } from 'react';
import dots from '../assets/images/dots.svg';
import Options from './Options';
import ConfirmAction from './ConfirmAction';
import uniqid from 'uniqid';

function Folder({ name, active, makeActive, id, handleDelete }) {
	const [showConfirm, setShowConfirm] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const moreRef = useRef();
	const displayOptions = () => setShowOptions(true);
	const hideOptions = () => setShowOptions(false);

	const toggleConfirm = () => setShowConfirm((prev) => !prev);

	return (
		<div
			className={`folder ${active ? 'active' : ''}`}
			onClick={() => makeActive(id)}
		>
			<div className="bullet"></div>
			{name}
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
					name={name}
					toggleConfirm={toggleConfirm}
				/>
			)}
		</div>
	);
}

export default Folder;
