import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './contexts/ThemeContext';

function TitleForm({
	handleCancel,
	handleSubmit,
	handleEdit,
	oldTitle,
	id,
	Bullet,
	Inline,
}) {
	const [title, setTitle] = useState(oldTitle || '');
	const [displayError, setDisplayError] = useState(false);
	const [theme, setTheme] = useTheme();
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
		<form className={theme == 'dark' ? 'dark' : ''}>
			<div className={`input ${Inline ? 'inline' : ''}`}>
				<div className="input-cont">
					{Bullet && <div className="bullet"></div>}
					<input
						type="text"
						name="title"
						value={title}
						onInput={(e) => setTitle(e.target.value)}
						placeholder="Title"
						ref={inputRef}
					/>
				</div>
				<div className={`buttons ${theme == 'dark' ? 'dark' : ''}`}>
					<button
						className="submit"
						onClick={(e) => {
							e.preventDefault();
							if (title) {
								id
									? handleEdit(id, title)
									: handleSubmit(title);
								handleCancel();
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
							id ? handleEdit(id, oldTitle) : handleCancel();
						}}
					>
						Cancel
					</button>
				</div>
			</div>
			{displayError && <div className="error">Enter a valid title!</div>}
		</form>
	);
}

export default TitleForm;
