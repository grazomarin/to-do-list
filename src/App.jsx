import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import { StorageProvider } from './components/contexts/StorageContext';
import { ThemeProvider } from './components/contexts/ThemeContext';
import Header from './components/Header';
import Index from './components/Index';
import Main from './components/Main';

function App() {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Jost'],
			},
		});
	}, []);

	return (
		<ThemeProvider>
			<Header />
			<StorageProvider>
				<Index />
				<Main />
			</StorageProvider>
		</ThemeProvider>
	);
}

export default App;
