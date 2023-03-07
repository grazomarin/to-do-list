import React, { useContext, useState } from 'react';

const StorageContext = React.createContext();
const SetStorageContext = React.createContext();

export const useStorage = () => useContext(StorageContext);
export const useSetStorage = () => useContext(SetStorageContext);

export const StorageProvider = ({ children }) => {
	const [position, setPosition] = useState([]);

	return (
		<StorageContext.Provider value={position}>
			<SetStorageContext.Provider value={setPosition}>
				{children}
			</SetStorageContext.Provider>
		</StorageContext.Provider>
	);
};
