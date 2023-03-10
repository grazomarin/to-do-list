import React, { useState } from 'react';

function TaskForm({ toggleDisplay, handleSubmit }) {
	return (
		<form>
			<input type="text" name="title" />
			<textarea
				name="details"
				id="details"
				cols="30"
				rows="10"
			></textarea>
			<div className="buttons">
				<button className="submit" type="submit" onClick={handleSubmit}>
					Submit
				</button>
				<button className="cancel" type="reset" onClick={toggleDisplay}>
					Cancel
				</button>
			</div>
		</form>
	);
}

export default TaskForm;