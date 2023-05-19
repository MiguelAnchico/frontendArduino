import { useState } from 'react';
import { UserContext } from './UserContext';

const alerts = [];

export const UserProvider = ({ children }) => {
	const [alerts, setAlerts] = useState([]);

	return (
		<UserContext.Provider value={{ alerts, setAlerts }}>
			{children}
		</UserContext.Provider>
	);
};
