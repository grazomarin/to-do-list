import React, { useEffect, useRef, useState } from 'react';
import FlagIcon from './icon_components/FlagIcon';
import { useTheme } from './contexts/ThemeContext';

function PriorityPicker({ handleClick, priority }) {
	const [showPicker, setShowPicker] = useState(false);
	const { theme } = useTheme();

	const displayPicker = () => setShowPicker(true);
	const hidePicker = () => setShowPicker(false);

	const pickerRef = useRef(null);

	function handleWindowClick(e) {
		if (
			e.target !== pickerRef.current &&
			!pickerRef.current?.contains(e.target)
		)
			hidePicker();
	}

	useEffect(() => {
		window.addEventListener('click', handleWindowClick);
		return () => window.removeEventListener('click', handleWindowClick);
	});

	return (
		<div
			className={`priorityPicker ${theme === 'dark' ? 'dark' : ''}`}
			ref={pickerRef}
		>
			<div className="preview" onClick={displayPicker}>
				<FlagIcon color={priority} handleClick={() => {}} />
			</div>

			{showPicker && (
				<div className="picker">
					<FlagIcon
						color="#f44336"
						handleClick={() => {
							handleClick('#f44336');
							hidePicker();
						}}
					/>
					<FlagIcon
						color="#ff9800"
						handleClick={() => {
							handleClick('#ff9800');
							hidePicker();
						}}
					/>
					<FlagIcon
						color="#03a9f4"
						handleClick={() => {
							handleClick('#03a9f4');
							hidePicker();
						}}
					/>
					<FlagIcon
						color="#808080"
						handleClick={() => {
							handleClick('#808080');
							hidePicker();
						}}
					/>
				</div>
			)}
		</div>
	);
}

export default PriorityPicker;
