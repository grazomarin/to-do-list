import React, { useState } from 'react';

function FolderForm({ toggleDisplay, handleSubmit }) {
	const [title, setTitle] = useState('');
	const resetValues = () => {
		setTitle('');
	};

	return (
		<form>
			<div className="input-cont">
				<div className="bullet"></div>
				<input
					type="text"
					name="title"
					value={title}
					onInput={(e) => setTitle(e.target.value)}
				/>
			</div>
			<div className="buttons">
				<button
					className="submit"
					onClick={(e) => {
						handleSubmit(e, { title: title });
						toggleDisplay();
						resetValues();
					}}
				>
					Submit
				</button>
				<button className="cancel" type="reset" onClick={toggleDisplay}>
					Cancel
				</button>
			</div>
		</form>
	);
}

export default FolderForm;
