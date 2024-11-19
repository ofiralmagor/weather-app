import { useState, useEffect } from 'react';
import axios from 'axios';
import './HourlyWeather.css';

<<<<<<< HEAD
const HourlyWeather = ({ city, getWeatherIcon }) => {
=======
<<<<<<< HEAD
const HourlyWeather = ({ city, getWeatherIcon, apiKey }) => {
=======
const HourlyWeather = ({ city }) => {
>>>>>>> a49df4e (Initial commit with backend integration)
>>>>>>> e4c4ae7aa9a8897174556bba597382b03497bbef
    const [hourlyData, setHourlyData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

<<<<<<< HEAD
=======
    const apiKey = import.meta.env.VITE_API_KEY;

>>>>>>> a49df4e (Initial commit with backend integration)
    useEffect(() => {
        const fetchHourlyWeather = async () => {
            if (!city) return;

            setLoading(true);
            setError('');
            try {
                // Fetch hourly weather data from the backend
                const response = await axios.get(`http://localhost:5000/api/weather?city=${city}`);
                const today = new Date().toISOString().split('T')[0];
                const hourlyForecast = response.data.list.filter(forecast => {
                    const forecastDate = new Date(forecast.dt * 1000).toISOString().split('T')[0];
                    return forecastDate === today;
                });
                setHourlyData(hourlyForecast);
            } catch (err) {
                setError(err.response?.data?.message || err.message || 'Unable to fetch hourly data.');
            } finally {
                setLoading(false);
            }
        };

        fetchHourlyWeather();
    }, [city]); // Re-run effect when city changes

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

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
const getWeatherIcon = (description) => {
    const iconMap = {
        'clear sky': 'bi bi-sun',
        'few clouds': 'bi bi-cloud-sun',
        'scattered clouds': 'bi bi-cloud',
        'broken clouds': 'bi bi-clouds',
        'shower rain': 'bi bi-cloud-drizzle',
        'rain': 'bi bi-cloud-rain',
        'thunderstorm': 'bi bi-cloud-lightning',
        'snow': 'bi bi-snow',
        'mist': 'bi bi-cloud-fog',
    };
    return iconMap[description] || 'bi bi-question-circle';
};
>>>>>>> a49df4e (Initial commit with backend integration)

>>>>>>> e4c4ae7aa9a8897174556bba597382b03497bbef
export default HourlyWeather;
