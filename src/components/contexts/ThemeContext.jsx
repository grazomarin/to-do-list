import React, { useContext, createContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		window.matchMedia('(prefers-color-scheme:dark)').matches
			? 'dark'
			: 'light'
	);

	return (
		<ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
			<div className={`container ${theme === 'dark' ? 'dark' : ''}`}>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};
