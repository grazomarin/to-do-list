import React, { useState, useRef, useEffect } from 'react';

function TaskForm({
	oldTitle,
	oldDescription,
	id,
	disableAddMode,
	handleEdit,
	handleSubmit,
}) {
	const [title, setTitle] = useState(oldTitle || '');
	const [description, setDescription] = useState(oldDescription || '');

	const inputRef = useRef(null);

	const resetValues = () => {
		setTitle('');
	};

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<form>
			<div className="input-cont">
				<input
					type="text"
					name="title"
					ref={inputRef}
					value={title}
					onInput={(e) => setTitle(e.target.value)}
					placeholder="Title"
				/>
				<textarea
					name="description"
					id="description"
					rows="3"
					value={description}
					onInput={(e) => setDescription(e.target.value)}
					placeholder="Details..."
				></textarea>
			</div>
			<div className="buttons">
				<button
					className="submit"
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						id
							? handleEdit(id, title, description)
							: handleSubmit(title, description);
						disableAddMode();
						resetValues();
					}}
				>
					Submit
				</button>
				<button
					className="cancel"
					type="reset"
					onClick={() => {
						id
							? handleEdit(id, oldTitle, oldDescription)
							: disableAddMode();
					}}
				>
					Cancel
				</button>
			</div>
		</form>
	);
}

export default TaskForm;
