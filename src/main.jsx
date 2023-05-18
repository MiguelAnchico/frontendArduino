import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Device } from './device.jsx';

import { QueryClient, QueryClientProvider } from 'react-query';
import { Device2 } from './Device2.jsx';
import { Device3 } from './Device3.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					{/*<Route exact path='/' element={<Login />} />*/}
					<Route path='/' element={<App />} />
					<Route path='/devices' element={<Device />} />
					<Route path='/devices1' element={<Device2 />} />
					<Route path='/devices2' element={<Device3 />} />
				</Routes>
			</BrowserRouter>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
