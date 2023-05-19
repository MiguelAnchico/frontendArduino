import { Link } from 'react-router-dom';
import './App.css';
import { GraficoLineasTodos } from './GraficoLineasTodos';
import { useAllDevicesValues } from './hooks/useDevices';

function App() {

	

	const {
		data,
		error,
		isLoading,
		isFetching,
	} = useAllDevicesValues();

	return (
		<div className='app'>
			<h1>Selecciona un dispositivo</h1>
			<div className='devices'>
				<Link
					className='selectDevices'
					to='/devices/1?deviceLabel=nodo1&tokenNode=BBFF-KS3tuc4mviNZDuyhOHylET4anX9ovs'
				>
					Dispositivo 1
				</Link>
				<Link
					className='selectDevices'
					to='/devices/2?deviceLabel=nodo2&tokenNode=BBFF-0D4ynbmqBp0ZgNfCGJvG2auPGegCBE'
				>
					Dispositivo 2
				</Link>
				<Link
					className='selectDevices'
					to='/devices/3?deviceLabel=nodo3&tokenNode=BBFF-fpdppzsRaDqrdNVIOQxdRWkdCdXaMC'
				>
					Dispositivo 3
				</Link>
			</div>
			<br />
			<h2>Humedad</h2>
			<GraficoLineasTodos data={data} type={'humedad'} quantity={10} />
			<br />
			<h2>Temperatura</h2>
			<GraficoLineasTodos data={data} type={'temperatura'} quantity={10} />
			<br />
			<h2>Nivel de ruido</h2>
			<GraficoLineasTodos data={data} type={'ruido'} quantity={10} />
			<br />
			<br />
		</div>
	);
}

export default App;
