import React, { useState } from 'react';

function Folder({ name, active, id }) {
	return (
		<div className={`folder ${active ? 'active' : ''}`}>
			<div className="bullet"></div> {name}
		</div>
	);
}

export default Folder;
