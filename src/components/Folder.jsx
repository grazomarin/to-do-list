import React, { useState } from 'react';

function Folder({ name, active, makeActive, id }) {
	return (
		<div
			className={`folder ${active ? 'active' : ''}`}
			onClick={() => makeActive(id)}
		>
			<div className="bullet"></div> {name}
		</div>
	);
}

export default Folder;
