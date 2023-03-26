import React, { useState, useEffect, useRef } from 'react';

function FolderForm({
	disableAddMode,
	handleSubmit,
	handleEdit,
	oldTitle,
	id,
}) {
	const [title, setTitle] = useState(oldTitle || '');
	const [displayError, setDisplayError] = useState(false);
	const resetValues = () => {
		setTitle('');
	};
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	function throwError() {
		setDisplayError(true);
		setTimeout(() => setDisplayError(false), 2000);
	}

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
						e.preventDefault();
						if (title) {
							id ? handleEdit(id, title) : handleSubmit(title);
							disableAddMode();
							resetValues();
						} else throwError();
					}}
				>
					Submit
				</button>
				<button
					className="cancel"
					type="reset"
					onClick={() => {
						id ? handleEdit(id, oldTitle) : disableAddMode();
					}}
				>
					Cancel
				</button>
			</div>
			{displayError && <div className="error">Enter a valid title!</div>}
		</form>
	);
}

export default FolderForm;
