import axios from 'axios';

const API = 'http://industrial.api.ubidots.com/api/v1.6/devices/';

export const getDevicesVar = async ({ deviceLabel, variableLabel, token }) => {
	const { data } = await axios.get(
		`${API}${deviceLabel}/${variableLabel}/lv?token=${token}`
	);
	return data;
};

export const getDevicesValues = async ({
	deviceLabel,
	variableLabel,
	token,
}) => {
	const { data } = await axios.get(
		`${API}${deviceLabel}/${variableLabel}/values?token=${token}`
	);
	return data;
};
