import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from './context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { useAlerts } from './hooks/useDevices';

export const Alerts = () => {
	const { alerts, setAlerts } = useContext(UserContext);
	const [actualAlerts, setActualAlerts] = useState([]);

	const {
		data: alert,
		error: errorAlerts,
		isLoading: isLoadingAlerts,
		isFetching: isFetchingAlerts,
	} = useAlerts();

	useEffect(() => {
		let existAlerts = alert?.filter((alert1) => {
			actualAlerts?.map((actualAlert) => {
				console.log(actualAlert);
				if (JSON.stringify(actualAlert) == JSON.stringify(alert1)) {
					return false;
				}
			});
			return true;
		});
		setAlerts(existAlerts);
	}, [alert]);

	useEffect(() => {
		alerts?.map((alert, index) => {
			let text;
			if (alert.value == 1) {
				text =
					'La temperatura del dispositivo ' +
					alert.context.device +
					' ha excedido los limites';
			} else {
				if (alert.value == 2) {
					text =
						'La humedad del dispositivo ' +
						alert.context.device +
						' ha excedido los limites';
				} else {
					text =
						'El nivel de ruido del dispositivo ' +
						alert.context.device +
						' ha excedido los limites';
				}
			}
			toast(text);
			if (alerts.length - 1 == index) {
				setActualAlerts((list) => [...list, alerts]);
				setAlerts([]);
			}
		});
	}, [alerts]);

	return (
		<>
			<Toaster />
		</>
	);
};
