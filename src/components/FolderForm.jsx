import React, { useState, useEffect, useRef } from 'react';

function FolderForm({ toggleDisplay, handleSubmit }) {
	const [title, setTitle] = useState('');
	const resetValues = () => {
		setTitle('');
	};
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<form>
			<div className="input-cont">
				<div className="bullet"></div>
				<input
					type="text"
					name="title"
					value={title}
					onInput={(e) => setTitle(e.target.value)}
					placeholder="Title"
					ref={inputRef}
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
