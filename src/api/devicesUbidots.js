import axios from 'axios';

const API = 'https://industrial.api.ubidots.com/api/v1.6/devices/';

export const getDevicesVar = async ({ deviceLabel, token }) => {
	const { data: humedad } = await axios.get(
		`${API}${deviceLabel}/humedad/lv?token=${token}`
	);
	const { data: temperatura } = await axios.get(
		`${API}${deviceLabel}/temperatura/lv?token=${token}`
	);
	const { data: ruido } = await axios.get(
		`${API}${deviceLabel}/nivel-de-ruido/lv?token=${token}`
	);

	const data = { humedad, temperatura, ruido };

	return data;
};

export const getDevicesValues = async ({ deviceLabel, token }) => {
	const { data: humedad } = await axios.get(
		`${API}${deviceLabel}/humedad/values?token=${token}`
	);
	const { data: temperatura } = await axios.get(
		`${API}${deviceLabel}/temperatura/values?token=${token}`
	);
	const { data: ruido } = await axios.get(
		`${API}${deviceLabel}/nivel-de-ruido/values?token=${token}`
	);

	let data = [];

	humedad?.results.map((humedad, index) => {
		const tiempo = new Date(humedad.timestamp);
		data.push({
			humedad: humedad.value,
			temperatura: temperatura?.results[index].value,
			ruido: ruido?.results[index].value,
			tiempo,
		});
	});

	return data;
};

export const getAllDevicesValues = async () => {
	const device1 = await getDevicesValues({deviceLabel: 'nodo1', token: 'BBFF-KS3tuc4mviNZDuyhOHylET4anX9ovs'});
	const device2 = await getDevicesValues({deviceLabel: 'nodo2', token: 'BBFF-0D4ynbmqBp0ZgNfCGJvG2auPGegCBE'});
	const device3 = await getDevicesValues({deviceLabel: 'nodo3', token: 'BBFF-fpdppzsRaDqrdNVIOQxdRWkdCdXaMC'});

	return [device1, device2, device3]
}

export const getAlerts = async () => {
	const { data: nodo1 } = await axios.get(
		`${API}nodo1/alerta/values?token=BBFF-xSvQoN1DgmJ4JhL7FUJ15zqwMGBC3U`
	);

	const { data: nodo2 } = await axios.get(
		`${API}nodo2/alerta/values?token=BBFF-0D4ynbmqBp0ZgNfCGJvG2auPGegCBE`
	);

	const { data: nodo3 } = await axios.get(
		`${API}nodo3/alerta/values?token=BBFF-fpdppzsRaDqrdNVIOQxdRWkdCdXaMC`
	);

	const data1 = nodo1?.results?.filter(({ timestamp }) => {
		return timestamp / 1000 + 600 > new Date().getTime() / 1000;
	});

	const data2 = nodo2?.results?.filter(({ timestamp }) => {
		return timestamp / 1000 + 600 > new Date().getTime() / 1000;
	});

	const data3 = nodo3?.results?.filter(({ timestamp }) => {
		return timestamp / 1000 + 600 > new Date().getTime() / 1000;
	});

	const data = [...data1, ...data2, ...data3];

	return data;
};
