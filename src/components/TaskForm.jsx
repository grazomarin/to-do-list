import React, { useState, useRef, useEffect } from 'react';

function TaskForm({ toggleDisplay, handleSubmit }) {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');

	const inputRef = useRef(null);

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
					onInput={(e) => setTitle(e.target.value)}
					placeholder="Title"
				/>
				<textarea
					name="description"
					id="description"
					rows="5"
					onInput={(e) => setDescription(e.target.value)}
					placeholder="Details..."
				></textarea>
			</div>
			<div className="buttons">
				<button
					className="submit"
					type="submit"
					onClick={(e) => {
						handleSubmit(e, {
							title: title,
							description: description,
						});
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

export default TaskForm;
