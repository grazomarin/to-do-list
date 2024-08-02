import { useEffect, useState, } from 'react';
import MoreIcon from './icon_components/moreIcon';

function Options({ children }) {
	const [showOptions, setShowOptions] = useState(false);

	useEffect(() => {
		const handleClick = () => setShowOptions(false);
		window.addEventListener('click', handleClick);
		return () => window.removeEventListener('click', handleClick);
	});

	return (
		<>
			<MoreIcon
				handleClick={async () =>
					await setTimeout(() => setShowOptions(true), 0)
				}
			/>
			{showOptions && <div className='options'>{children}</div>}
		</>
	);
}

Options.Option = function Option ({ text, handleClick })  {
	return (
			<div className='options--option' onClick={() => handleClick()}>
			{text}
		</div>
	);
};

export default Options;
