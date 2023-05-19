import { useAlerts, useDevices, useDevicesValues } from './hooks/useDevices';
import './Device.css';
import { Nav } from './Nav';
import { useParams, useSearchParams } from 'react-router-dom';
import { GraficoLineas } from './GraficoLineas';
import { useEffect, useState } from 'react';

export const Device = () => {
	const [params] = useSearchParams();
	const { id } = useParams();

	const deviceLabel = params.get('deviceLabel');
	const tokenNode = params.get('tokenNode');

	const [counter, setCounter] = useState(10);

	const {
		data: lastValues,
		error: errorLastValues,
		isLoading: isLoadingLastValues,
		isFetching: isFetchingLastValues,
	} = useDevices({ deviceLabel: deviceLabel, token: tokenNode });

	const {
		data: historicalData,
		error: errorHistoricalData,
		isLoading: isLoadingHistoricalData,
		isFetching: isFetchingHistoricalData,
	} = useDevicesValues({ deviceLabel: deviceLabel, token: tokenNode });

	useEffect(() => {
		if (historicalData?.length < 10) {
			setCounter(historicalData?.length);
		}
	}, [historicalData]);

	const handleDecrement = () => {
		if (counter > 10) {
			setCounter(counter - 1);
		}
	};

	const handleIncrement = () => {
		if (counter < historicalData.length) {
			setCounter(counter + 1);
		}
	};

	return (
		<div className='Device'>
			<Nav />
			<h1>Dispositivo {id}</h1>
			<h2>Ultimos valores</h2>
			<div className='DeviceVariableSection'>
				<div className='Card-Variable'>
					<h3>Humedad</h3>
					<p>{lastValues?.humedad}</p>
				</div>
				<div className='Card-Variable'>
					<h3>Temperatura</h3>
					<p>{lastValues?.temperatura}</p>
				</div>
				<div className='Card-Variable'>
					<h3>Nivel de Ruido</h3>
					<p>{lastValues?.ruido}</p>
				</div>
			</div>
			<h2>Graficos con los ultimos {counter} valores</h2>
			<div className='buttonCounter'>
				<button onClick={() => handleDecrement()}>Decrementar</button>
				<button onClick={() => handleIncrement()}>Aumentar</button>
			</div>
			<div className='Graficos'>
				<div>
					<GraficoLineas
						data={historicalData}
						type='humedad'
						title='Humedad'
						quantity={counter}
					/>
				</div>

				<div>
					<GraficoLineas
						data={historicalData}
						type='temperatura'
						title='Temperatura'
						quantity={counter}
					/>
				</div>
				<div>
					<GraficoLineas
						data={historicalData}
						type='ruido'
						title='Nivel de Ruido'
						quantity={counter}
					/>
				</div>
			</div>

			<h2>Historial de Valores</h2>
			<table className='table' id='tabla-datos'>
				<thead>
					<tr>
						<th scope='col'>Humedad</th>
						<th scope='col'>Temperatura</th>
						<th scope='col'>Nivel de Ruido</th>
						<th scope='col'>Fecha</th>
					</tr>
				</thead>
				<tbody>
					{historicalData?.map((data) => (
						<tr key={data.tiempo.toLocaleString('es-CO', { timeZone: 'UTC' })}>
							<td>{data.humedad}</td>
							<td>{data.temperatura}</td>
							<td>{data.ruido}</td>
							<td>
								{data.tiempo.toLocaleString('es-CO', { timeZone: 'UTC' })}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
