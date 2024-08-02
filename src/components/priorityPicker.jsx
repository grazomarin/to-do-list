import { useEffect, useState } from 'react';
import FlagIcon from './icon_components/flagIcon';

export default function PriorityPicker({ priorityColor, setPriorityColor }) {
	const [showPicker, setShowPicker] = useState(false);

	useEffect(() => {
		const handleClick = () => setShowPicker(false);
		window.addEventListener('click', handleClick);
		return () => window.removeEventListener('click', handleClick);
	});

	return (
		<div className='priority-cont'>
			<div className='priority-cont--preview' onClick={() => setShowPicker(true)}>
				<FlagIcon
					color={priorityColor}
					handleClick={async () => await setTimeout(() => setShowPicker(true), 0)}
				/>
			</div>

			{showPicker && (
				<div className='priority-cont--picker'>
					{['#f44336', '#ff9800', '#03a9f4', '#808080'].map((color) => (
						<FlagIcon color={color} handleClick={() => setPriorityColor(color)} key={color} />
					))}
				</div>
			)}
		</div>
	);
}
