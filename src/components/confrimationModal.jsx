import { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function ConfirmationModal({
	title,
	handleDelete,
	handleCancel,
}) {
	useEffect(() => {
		function handleClick(e) {
			if (e.target.className === 'overlay') handleCancel();
		}

		window.addEventListener('click', handleClick);
		return () => {
			window.removeEventListener('click', handleClick);
		};
	}, []);

	return ReactDOM.createPortal(
		<div className='overlay'>
			<div className='confirm'>
				<h2>
					Are you sure you want to delete <b>{title}</b>?
				</h2>
						<div className='buttons'>
					<button className='buttons--submit' onClick={handleDelete}>
						Confirm
					</button>
					<button className='buttons--cancel' onClick={handleCancel}>
						Cancel
					</button>
				</div>
			</div>
		</div>,
		document.querySelector('.container')
	);
}
