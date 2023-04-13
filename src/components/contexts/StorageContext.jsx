import React, { useContext, useState, createContext, useEffect } from 'react';
import uniqid from 'uniqid';

const StorageContext = createContext();

export const useStorage = () => useContext(StorageContext);

export const StorageProvider = ({ children }) => {
	const [storage, setStorage] = useState(
		JSON.parse(localStorage.getItem('data')) || [
			{
				title: 'Index',
				tasks: [],
				sections: [],
				active: true,
				edit: false,
				id: uniqid(),
			},
		]
	);

	useEffect(() => {
		localStorage.setItem('data', JSON.stringify(storage));
	}, [storage]);

	return (
		<StorageContext.Provider value={[storage, setStorage]}>
			{children}
		</StorageContext.Provider>
	);
};
