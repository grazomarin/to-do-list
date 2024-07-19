import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import Header from './components/header';
import Index from './components';
import Tasks from './components/tasks';

function App() {
	const [theme, setTheme] = useState(
		window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light'
	);

	const toggleTheme = () =>
		setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));

	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Jost'],
			},
		});
	}, []);

	return (
		<div className={`container ${theme}`}>
			<Header theme={theme} toggleTheme={toggleTheme} />
			<Index />
			<Tasks />
		</div>
	);
}

export default App;
