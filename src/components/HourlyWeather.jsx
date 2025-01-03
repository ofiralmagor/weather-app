import { useState, useEffect } from 'react';
import './HourlyWeather.css';
const HourlyWeather = ({ city, getWeatherIcon, apiKey }) => {
    const [hourlyData, setHourlyData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchHourlyWeather = async () => {
            if (!city) return;
            setLoading(true);
            setError('');
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);
                if (!response.ok) {
                    throw new Error('Unable to fetch hourly data.');
                }
                const data = await response.json();
                const today = new Date().toISOString().split('T')[0];
                const hourlyForecast = data.list.filter(forecast => {
                    const forecastDate = new Date(forecast.dt * 1000).toISOString().split('T')[0];
                    return forecastDate === today; 
                });
                setHourlyData(hourlyForecast);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchHourlyWeather();
    }, [city]); 
    return (
        <div className="hourly-weather">
            {loading && <div className="spinner"></div>}
            {error && <p className="error-message">{error}</p>}
            {hourlyData.length > 0 && (
                <>
                    <h2>Hourly Weather for Today in {city}</h2>
                    <div className="hourly-forecast">
                        {hourlyData.map((forecast, index) => (
                            <div className="hourly-card" key={index}>
                                <p className="hourly-date">{new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                <i className={`weather-hour-icon ${getWeatherIcon(forecast.weather[0].description)}`}></i>
                                <p className="hourly-temp">{forecast.main.temp}°C</p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
export default HourlyWeather;