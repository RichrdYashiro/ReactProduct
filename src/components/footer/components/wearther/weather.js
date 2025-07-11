import { useEffect, useState } from 'react';
import styled from 'styled-components';

const WeatherContainer = ({ className }) => {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weatherDesc, setWeatherDesc] = useState('');
	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Krasnodar&lang=ru&appid=11206a5f5ead25565b7dff300c2bb324',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeatherDesc(weather[0].description);
			});
	}, []);
	return (
		<div className={className}>
			<div>
				{city},{' '}
				{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
			</div>

			<div>
				{temperature} градусов, {weatherDesc}
			</div>
		</div>
	);
};

export const Weather = styled(WeatherContainer)`
	display: flex;
	flex-direction: column;
	gap: 5px 0;
	font-weight: bold;
`;
