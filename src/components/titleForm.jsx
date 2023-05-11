import React, { useState, useEffect, useRef } from 'react';
import { CirclePicker } from 'react-color';

export default function TitleForm({
	data,
	handleCancel,
	handleSubmit,
	handleEdit,
	Bullet,
	Inline,
}) {
	const [title, setTitle] = useState(data?.title || '');
	const [color, setColor] = useState(data?.color || '#f44336');
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
		<form>
			<div className={`input${Inline ? '__inline' : ''}`}>
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
				<div className="buttons">
					<button
						className="buttons--submit"
						onClick={(e) => {
							e.preventDefault();
							if (title) {
								data?.id
									? handleEdit(data.id, { title, color })
									: handleSubmit({ title, color });
								handleCancel();
								resetValues();
							} else throwError();
						}}
					>
						Submit
					</button>
					<button
						className="buttons--cancel"
						type="reset"
						onClick={() => {
							data?.id
								? handleEdit(data.id, {
										title: data.title,
										color: data.color,
								  })
								: handleCancel();
						}}
					>
						Cancel
					</button>
				</div>
			</div>
			{showError && (
				<div className="error-message">Enter a valid title!</div>
			)}
		</form>
	);
}
