import { Link } from 'react-router-dom';

export const Nav = () => {
	return (
		<div>
			<Link to='/'>Inicio</Link>
			<Link to='/devices/1?deviceLabel=nodo1&tokenNode=BBFF-KS3tuc4mviNZDuyhOHylET4anX9ovs'>
				Dispositivo 1
			</Link>
			<Link to='/devices/2?deviceLabel=nodo2&tokenNode=BBFF-0D4ynbmqBp0ZgNfCGJvG2auPGegCBE'>
				Dispositivo 2
			</Link>
			<Link to='/devices/3?deviceLabel=nodo3&tokenNode=BBFF-fpdppzsRaDqrdNVIOQxdRWkdCdXaMC'>
				Dispositivo 3
			</Link>
		</div>
	);
};
