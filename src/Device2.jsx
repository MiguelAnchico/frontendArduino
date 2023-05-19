import { useDevices, useDevicesValues } from './hooks/useDevices';
import './Device.css';
import { Nav } from './Nav';

const keysH = {
	deviceLabel: 'nodo2',
	variableLabel: 'humedad',
	token: 'BBFF-0D4ynbmqBp0ZgNfCGJvG2auPGegCBE',
};

const keysT = {
	deviceLabel: 'nodo2',
	variableLabel: 'temperatura',
	token: 'BBFF-0D4ynbmqBp0ZgNfCGJvG2auPGegCBE',
};

const keysR = {
	deviceLabel: 'nodo2',
	variableLabel: 'nivel-de-ruido',
	token: 'BBFF-0D4ynbmqBp0ZgNfCGJvG2auPGegCBE',
};

export const Device2 = () => {
	const {
		data: humedad,
		error: errorHumedad,
		isLoading: isLoadingHumedad,
		isFetching: isFetchingHumedad,
	} = useDevices(keysH);

	const {
		data: temperatura,
		error: errorTemperatura,
		isLoading: isLoadingTemperatura,
		isFetching: isFetchingTemperatura,
	} = useDevices(keysT);

	const {
		data: ruido,
		error: errorRuido,
		isLoading: isLoadingRuido,
		isFetching: isFetchingRuido,
	} = useDevices(keysR);

	const {
		data: valuesHumedad,
		error: errorValuesHumedad,
		isLoading: isLoadingValuesHumedad,
		isFetching: isFetchingValuesHumedad,
	} = useDevicesValues(keysH);

	const {
		data: valuesTemperatura,
		error: errorValuesTemperatura,
		isLoading: isLoadingValuesTemperatura,
		isFetching: isFetchingValuesTemperatura,
	} = useDevicesValues(keysT);

	const {
		data: valuesRuido,
		error: errorValuesRuido,
		isLoading: isLoadingValuesRuido,
		isFetching: isFetchingValuesRuido,
	} = useDevicesValues(keysR);

	return (
		<div className='Device'>
			<Nav />
			<h1>Dispositivo 2</h1>
			<h2>Estadisticas</h2>
			<div className='DeviceVariableSection'>
				<div className='Card-Variable'>
					<h3>Humedad</h3>
					<p>{humedad}</p>
				</div>
				<div className='Card-Variable'>
					<h3>Temperatura</h3>
					<p>{temperatura}</p>
				</div>
				<div className='Card-Variable'>
					<h3>Nivel de Ruido</h3>
					<p>{ruido}</p>
				</div>
			</div>

			<h2>Historial de Valores</h2>
			<table class='table table-success table-striped w-100' id='tabla-datos'>
				<thead>
					<tr>
						<th scope='col'>Humedad</th>
						<th scope='col'>Temperatura</th>
						<th scope='col'>Nivel de Ruido</th>
					</tr>
				</thead>
				<tbody>
					{valuesHumedad?.results?.map(({ value, timestamp }, index) => (
						<tr>
							<td key={timestamp}>{value}</td>
							<td key={valuesTemperatura?.results[index]?.timestamp}>
								{valuesTemperatura?.results[index]?.value}
							</td>
							<td key={valuesRuido?.results[index]?.timestamp}>
								{valuesRuido?.results[index]?.value}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};