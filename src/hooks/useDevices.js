import { useQuery } from 'react-query';
import {
	getDevicesVar,
	getDevicesValues,
	getAlerts,
	getAllDevicesValues
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

export const useAllDevicesValues = (keys) => {
	return useQuery(['values', keys], () => getAllDevicesValues(), {
		refetchInterval: 2000,
	});
};

export const useAlerts = (keys) => {
	return useQuery(['alerts', keys], () => getAlerts(), {
		refetchInterval: 1000,
	});
};
