export default function CheckBoxIcon({
	priorityColor,
	completed,
	handleComplete,
}) {
	return (
		<div className='checkbox-cont' onClick={handleComplete}>
			<svg className='checkbox-cont--checkbox-icon' viewBox='-0.5 0 19 19'>
				<g strokeWidth='0' />

				<g strokeLinecap='round' strokeLinejoin='round' />

				<g>
					<g
						strokeWidth='1.2'
						fill='none'
						fillRule='evenodd'
						sketch:type='MSPage'
						style={{ stroke: priorityColor }}
					>
						<rect
							id='path'
							stroke='#000000'
							fill='#000000FFFFFF'
							sketch:type='MSShapeGroup'
							x='2'
							y='2'
							width='13.5'
							height='13.5'
							rx='2'
							style={{ stroke: priorityColor }}
						></rect>
					</g>
				</g>
			</svg>
			{completed && (
				<svg
					className='checkbox-cont--check-icon'
					viewBox='0 0 24 24'
					fill='none'
					stroke='#000000'
					strokeWidth='0.6'
				>
					<g strokeWidth='0' />

					<g strokeLinecap='round' strokeLinejoin='round' />

					<g>
						<path
							fillRule='evenodd'
							clipRule='evenodd'
							d='M19.7071 6.29289C20.0976 6.68342 20.0976 7.31658 19.7071 7.70711L10.4142 17C9.63316 17.7811 8.36683 17.781 7.58579 17L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929C3.68342 10.9024 4.31658 10.9024 4.70711 11.2929L9 15.5858L18.2929 6.29289C18.6834 5.90237 19.3166 5.90237 19.7071 6.29289Z'
							style={{ fill: priorityColor, stroke: priorityColor }}
						/>
					</g>
				</svg>
			)}
		</div>
	);
}
