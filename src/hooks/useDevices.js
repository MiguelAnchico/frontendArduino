import { useQuery } from 'react-query';
import { getDevicesVar, getDevicesValues } from '../api/devicesUbidots';

let key = 'device';

export const useDevices = (keys) => {
	return useQuery([key, keys], () => getDevicesVar(keys));
};

export const useDevicesValues = (keys) => {
	return useQuery(['values', keys], () => getDevicesValues(keys));
};
