import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './contexts/ThemeContext';
import { CirclePicker } from 'react-color';
function TitleForm({
	handleCancel,
	handleSubmit,
	handleEdit,
	oldTitle,
	oldColor,
	id,
	Bullet,
	Inline,
}) {
	const { theme } = useTheme();
	const [title, setTitle] = useState(oldTitle || '');
	const [color, setColor] = useState(oldColor || '#f44336');
	const [showError, setShowError] = useState(false);
	const [showColorPicker, setShowColorPicker] = useState(false);

	const displayColorPicker = () => setShowColorPicker(true);
	const hideColorPicker = () => setShowColorPicker(false);
	const resetValues = () => setTitle('');

	const bulletRef = useRef(null);
	const colorPickerRef = useRef(null);
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
		Bullet && window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);

	function handleClick(e) {
		if (
			colorPickerRef.current?.className !== e.target?.className &&
			bulletRef.current !== e.target &&
			!bulletRef.current.contains(e.target)
		)
			hideColorPicker();
	}

	function throwError() {
		setShowError(true);
		setTimeout(() => setShowError(false), 2000);
	}

	return (
		<form className={theme == 'dark' ? 'dark' : ''}>
			<div className={`input ${Inline ? 'inline' : ''}`}>
				<div className="input-cont">
					{Bullet && (
						<div
							className="bullet-cont"
							onClick={displayColorPicker}
							ref={bulletRef}
						>
							<div
								className="bullet"
								style={{
									backgroundColor: color,
								}}
							></div>
						</div>
					)}
					<input
						type="text"
						name="title"
						value={title}
						onInput={(e) => setTitle(e.target.value)}
						placeholder="Title"
						ref={inputRef}
					/>
				</div>
				{showColorPicker && (
					<CirclePicker
						triangle="hide"
						color={color}
						ref={colorPickerRef}
						onChange={(newColor) => {
							setColor(newColor.hex);
						}}
						onChangeComplete={hideColorPicker}
					/>
				)}
				<div className={`buttons ${theme == 'dark' ? 'dark' : ''}`}>
					<button
						className="submit"
						onClick={(e) => {
							e.preventDefault();
							if (title) {
								id
									? handleEdit(id, title, color)
									: handleSubmit(title, color);
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
							id
								? handleEdit(id, oldTitle, oldColor)
								: handleCancel();
						}}
					>
						Cancel
					</button>
				</div>
			</div>
			{showError && <div className="error">Enter a valid title!</div>}
		</form>
	);
}

export default TitleForm;
