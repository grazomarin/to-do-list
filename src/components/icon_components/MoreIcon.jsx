import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const MoreIcon = React.forwardRef(({ handleClick }, ref) => {
	const [theme, setTheme] = useTheme();

	return (
		<svg
			className={`more_icon ${theme === 'dark' ? 'dark' : ''}`}
			viewBox="0 0 24 24"
			fill="none"
			onClick={handleClick}
			ref={ref}
		>
			<path
				d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5Z"
				fill="#000000"
			/>
			<path
				d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
				fill="#000000"
			/>
			<path
				d="M12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z"
				fill="#000000"
			/>
		</svg>
	);
});

export default MoreIcon;
