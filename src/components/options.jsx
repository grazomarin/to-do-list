import React, { useEffect, useState, useRef } from 'react';
import MoreIcon from './icon_components/moreIcon';

function Options({ children }) {
	const [showOptions, setShowOptions] = useState(false);

	useEffect(() => {
		function handleClick(e) {
			if (e.target.className !== 'more-icon') setShowOptions();
		}

		window.addEventListener('click', handleClick);

		return () => {
			window.removeEventListener('click', handleClick);
		};
	});

	return (
		<>
			<MoreIcon
				handleClick={async () => {
					await setTimeout(() => setShowOptions(true), 0);
				}}
			/>
			{showOptions && <div className='options'>{children}</div>}
		</>
	);
}

Options.Option = ({ text, handleClick }) => {
	return (
		<div className='options--option' onClick={() => handleClick()}>
			{text}
		</div>
	);
};

export default Options;