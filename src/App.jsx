import { Link } from 'react-router-dom';
import './App.css';

function App() {
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
		</div>
	);
}

export default App;
