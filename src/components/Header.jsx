import React, { useState } from 'react';
import moon from '../assets/images/moon.svg';
import sun from '../assets/images/sun.svg';
import { useTheme } from './contexts/ThemeContext';

function Header() {
	const [theme, setTheme] = useTheme();

	function toggleTheme() {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	}

	return (
		<div className={`header ${theme === 'dark' ? 'dark' : ''}`}>
			<img
				className="theme_icon"
				src={theme === 'dark' ? sun : moon}
				alt=""
				onClick={toggleTheme}
			/>
			<a
				className="title"
				href="https://github.com/grazomarin/to-do-list"
				target="_blank"
			>
				To Do List
			</a>
		</div>
	);
}

export default Header;
