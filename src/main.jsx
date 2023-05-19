import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Device } from './Device.jsx';
import { UserProvider } from './context/UserProvider.jsx';
import { Alerts } from './Alerts.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<UserProvider>
				<Alerts />
				<BrowserRouter>
					<Routes>
						{/*<Route exact path='/' element={<Login />} />*/}
						<Route path='/' element={<App />} />
						<Route path='/devices/:id' element={<Device />} />
					</Routes>
				</BrowserRouter>
			</UserProvider>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
