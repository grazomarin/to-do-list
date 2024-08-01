function FormButtons({ children, handleSubmit, disableForm, data }) {
	return (
		<div className='buttons'>
			{children}
			<button className='buttons--submit' onClick={handleSubmit}>
				{data ? 'Edit' : 'Add'}
			</button>
			<button className='buttons--cancel' type='reset' onClick={disableForm}>
				Cancel
			</button>
		</div>
	);
}

export default FormButtons;
