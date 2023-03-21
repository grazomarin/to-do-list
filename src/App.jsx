import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import { StorageProvider } from './components/contexts/StorageContext';
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
		<>
			<StorageProvider>
				<Index />
				<Main />
			</StorageProvider>
		</>
	);
}

export default App;
