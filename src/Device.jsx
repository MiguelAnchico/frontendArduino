import { useDevices, useDevicesValues } from './hooks/useDevices';
import './Device.css';

const keysH = {
	deviceLabel: 'nodo1',
	variableLabel: 'humedad',
	token: 'BBFF-KS3tuc4mviNZDuyhOHylET4anX9ovs',
};

const keysT = {
	deviceLabel: 'nodo1',
	variableLabel: 'temperatura',
	token: 'BBFF-KS3tuc4mviNZDuyhOHylET4anX9ovs',
};

const keysR = {
	deviceLabel: 'nodo1',
	variableLabel: 'nivel-de-ruido',
	token: 'BBFF-KS3tuc4mviNZDuyhOHylET4anX9ovs',
};

export const Device = () => {
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
			<h1>Estadisticas</h1>
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
						<>
							<td key={timestamp}>{value}</td>
							<td key={valuesTemperatura?.results[index]?.timestamp}>
								{valuesTemperatura?.results[index]?.value}
							</td>
							<td key={valuesRuido?.results[index]?.timestamp}>
								{valuesRuido?.results[index]?.value}
							</td>
						</>
					))}
				</tbody>
			</table>
		</div>
	);
};
