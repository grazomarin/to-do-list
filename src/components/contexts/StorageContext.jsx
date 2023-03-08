import React, { useContext, useState } from 'react';
import uniqid from 'uniqid';

const StorageContext = React.createContext();
const SetStorageContext = React.createContext();

export const useStorage = () => useContext(StorageContext);
export const useSetStorage = () => useContext(SetStorageContext);

export const StorageProvider = ({ children }) => {
	const [position, setPosition] = useState([
		{ name: 'Index', tasks: [], active: true, id: uniqid() },
	]);

	return (
		<StorageContext.Provider value={position}>
			<SetStorageContext.Provider value={setPosition}>
				{children}
			</SetStorageContext.Provider>
		</StorageContext.Provider>
	);
};
