import { useQuery } from 'react-query';
import {
	getDevicesVar,
	getDevicesValues,
	getAlerts,
} from '../api/devicesUbidots';

let key = 'device';

export const useDevices = (keys) => {
	return useQuery([key, keys], () => getDevicesVar(keys), {
		refetchInterval: 2000,
	});
};

export const useDevicesValues = (keys) => {
	return useQuery(['values', keys], () => getDevicesValues(keys), {
		refetchInterval: 2000,
	});
};

export const useAlerts = (keys) => {
	return useQuery(['alerts', keys], () => getAlerts(), {
		refetchInterval: 1000,
	});
};
