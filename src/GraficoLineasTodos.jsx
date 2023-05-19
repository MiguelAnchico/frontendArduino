import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

const mioptions = {
	scales: {
		y: {
			min: 0,
		},
		x: {
			ticks: { color: 'rgb(255, 99, 132)' },
		},
	},
};

export const GraficoLineasTodos = ({ data, type, quantity }) => {
	const [values1, setValues1] = useState();
	const [values2, setValues2] = useState();
	const [values3, setValues3] = useState();

	const [labels, setLabels] = useState();

	useEffect(() => {
		let filterValues ={ 0: [], 1:[], 2:[]};
		let filterLabels = [];

		data?.map((dispositivo, indice) => {
			dispositivo?.map((value, index) => {
				if (index < quantity) {
					filterValues[indice].push(value[type]);
				}
			});
	
		})

		if(data) {
			data[0]?.map((value, index) => {
				if (index < quantity) {
					filterLabels.push(
						value['tiempo'].toLocaleString('es-CO', { timeZone: 'UTC' })
					);
				}
			});
	
		}
		
		
		setValues1(filterValues[0].reverse());
		setValues2(filterValues[1].reverse());
		setValues3(filterValues[2].reverse());
		setLabels(filterLabels.reverse());
	}, [data]);

	const midata = {
		labels: labels,
		datasets: [
			{
				label: 'Dispositivo 1',
				data: values1,
				tension: 0.5,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				pointRadius: 5,
				pointBorderColor: 'rgba(255, 99, 132)',
				pointBackgroundColor: 'rgba(255, 99, 132)',
			},
			{
				label: 'Dispositivo 2',
				data: values2,
				borderColor: 'rgb(255, 214, 51)',
				backgroundColor: 'rgba(255, 214, 51, 0.5)',
				pointRadius: 5,
				pointBorderColor: 'rgba(255, 214, 51)',
				pointBackgroundColor: 'rgba(255, 214, 51)',
			},
			{
				label: 'Dispositivo 3',
				data: values3,
				borderColor: 'rgb(148, 255, 51)',
				backgroundColor: 'rgba(148, 255, 51, 0.5)',
				pointRadius: 5,
				pointBorderColor: 'rgba(148, 255, 51)',
				pointBackgroundColor: 'rgba(148, 255, 51)',
			},
		],
	};
	return <Line data={midata} options={mioptions}></Line>;
};
