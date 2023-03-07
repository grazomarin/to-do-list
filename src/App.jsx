import React, { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
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
    <>
      <Header />
      <Main />
      <Index />
    </>
  );
}

export default App;
