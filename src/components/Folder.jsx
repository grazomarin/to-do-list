import React, { useState } from 'react';
import dots from '../assets/images/dots.svg';
import { useDeleteFolder } from './contexts/StorageContext';
import FolderOptions from './FolderOptions';

function Folder({ name, active, makeActive, id }) {
	const [showOptions, setShowOptions] = useState(false);
	const displayOptions = () => setShowOptions(true);
	const hideOptions = () => setShowOptions(false);
	const handleDelete = useDeleteFolder();

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
					handleDelete={() => handleDelete(id)}
				/>
			)}
		</div>
	);
}

export default Folder;
