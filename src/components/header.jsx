import React, { useState } from 'react';
import moon from '../assets/images/moon.svg';
import sun from '../assets/images/sun.svg';

export default function Header({ theme, toggleTheme }) {
	return (
		<div className="header">
			<img
				className="theme-icon"
				src={theme === 'dark' ? sun : moon}
				alt=""
				onClick={toggleTheme}
			/>
			<a
				className="header--title"
				href="https://github.com/grazomarin/to-do-list"
				target="_blank"
			>
				To Do List
			</a>
		</div>
	);
}
