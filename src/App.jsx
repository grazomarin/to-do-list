import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import { StorageProvider } from './components/contexts/StorageContext';
import Header from './components/Header';
import Index from './components/Index';
import Main from './components/Main';

function App() {
	const [theme, setTheme] = useState(
		window.matchMedia('(prefers-color-scheme:dark)').matches
			? 'dark'
			: 'light'
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
			<StorageProvider>
				<Index />
				<Main />
			</StorageProvider>
		</div>
	);
}

export default App;
