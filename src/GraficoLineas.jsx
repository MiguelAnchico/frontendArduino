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

export const GraficoLineas = ({ data, title, type, quantity }) => {
	const [values, setValues] = useState();
	const [labels, setLabels] = useState();

	useEffect(() => {
		let filterValues = [];
		let filterLabels = [];

		data?.map((value, index) => {
			if (index < quantity) {
				filterValues.push(value[type]);
			}
		});
		data?.map((value, index) => {
			if (index < quantity) {
				filterLabels.push(
					value['tiempo'].toLocaleString('es-CO', { timeZone: 'UTC' })
				);
			}
		});

		setValues(filterValues.reverse());
		setLabels(filterLabels.reverse());
	}, [data]);

	const midata = {
		labels: labels,
		datasets: [
			{
				label: title,
				data: values,
				tension: 0.5,
				fill: true,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
				pointRadius: 5,
				pointBorderColor: 'rgba(255, 99, 132)',
				pointBackgroundColor: 'rgba(255, 99, 132)',
			},
		],
	};
	return <Line data={midata} options={mioptions}></Line>;
};
