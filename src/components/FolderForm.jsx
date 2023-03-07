import React, { useState } from 'react';

function FolderForm({ toggleDisplay, handleSubmit }) {
	return (
		<form>
			<input type="text" name="title" />
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

export default FolderForm;
