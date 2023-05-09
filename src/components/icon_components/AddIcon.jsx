import React from 'react';

function AddIcon({ handleClick }) {
	return (
		<svg
			className="add-icon"
			width="20"
			height="20"
			viewBox="0 0 370 370"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			onClick={handleClick}
		>
			<rect x="170" width="40" height="350" rx="16" fill="black" />
			<rect
				x="10"
				y="220"
				width="40"
				height="350"
				rx="16"
				transform="rotate(-90 0 210)"
				fill="black"
			/>
		</svg>
	);
}

export default AddIcon;
