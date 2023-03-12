import React, { useState } from 'react';
import dots from '../assets/images/dots.svg';
import { useDeleteFolder } from './contexts/StorageContext';
import FolderOptions from './FolderOptions';
import ConfirmAction from './ConfirmAction';

function Folder({ name, active, makeActive, id }) {
	const [showConfirm, setShowConfirm] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const displayOptions = () => setShowOptions(true);
	const hideOptions = () => setShowOptions(false);
	const handleDelete = useDeleteFolder();

	const toggleConfirm = () => setShowConfirm((prev) => !prev);

	return (
		<div
			className={`folder ${active ? 'active' : ''}`}
			onClick={() => makeActive(id)}
		>
			<div className="bullet"></div>
			{name}
			<img className="more" src={dots} alt="" onClick={displayOptions} />
			{showOptions && (
				<FolderOptions
					hideOptions={hideOptions}
					toggleConfirm={toggleConfirm}
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
