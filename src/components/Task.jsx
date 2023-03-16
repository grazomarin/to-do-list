import React, { useState } from 'react';

function Task({ title, description, id }) {
	return (
		<div>
			<div>{title}</div>
			<div>{description}</div>
		</div>
	);
}

export default Task;
