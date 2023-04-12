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
			<div className="title">To Do List</div>
		</div>
	);
}

export default Header;
