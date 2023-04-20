import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

function FlagIcon({ color, handleClick }) {
	const { theme } = useTheme();

	return (
		<svg
			className={`flag_icon ${theme === 'dark' ? 'dark' : ''}`}
			viewBox="0 0 24.00 24.00"
			fill="none"
			onClick={handleClick}
		>
			<g strokeWidth="0"></g>
			<g
				strokeLinecap="round"
				strokeLinejoin="round"
				stroke="#ff0000"
				strokeWidth="1.104"
			></g>
			<g>
				<g>
					<path
						d="M4 21V15.6871M4 15.6871C9.81818 11.1377 14.1818 20.2363 20 15.6869V4.31347C14.1818 8.86284 9.81818 -0.236103 4 4.31327V15.6871Z"
						stroke="#000000"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						fill={color}
					></path>
				</g>
			</g>
		</svg>
	);
}

export default FlagIcon;
