import { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherSummary from './WeatherSummary.jsx';
import WeatherForecast from './WeatherForecast.jsx';
import HourlyWeather from './HourlyWeather.jsx';

import '../App.css';
import './Weather.css';

const Weather = () => {
    const [inputCity, setInputCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState(''); 
    const [showInput, setShowInput] = useState(false);
<<<<<<< HEAD

<<<<<<< HEAD
=======
=======
>>>>>>> a49df4e (Initial commit with backend integration)
    const apiKey = import.meta.env.VITE_API_KEY;

>>>>>>> e4c4ae7aa9a8897174556bba597382b03497bbef
    const fetchWeather = async (cityName) => {
        setLoading(true);
        setError('');
        try {
            // Fetch weather data from your backend API
            const weatherResponse = await axios.get(
                `http://localhost:5000/api/weather?city=${cityName}`
            );
            setWeatherData(weatherResponse.data);
            setCity(weatherResponse.data.city.name);
            setInputCity('');
            setShowInput(false);
        } catch (err) {
            setError('Failed to fetch weather data.');
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputCity.trim()) {
            setError('Please enter a city name.');
        } else {
            fetchWeather(inputCity);
        }
    };

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
<<<<<<< HEAD
            'light rain': 'bi bi-cloud-drizzle',
            'overcast clouds': 'bi bi-clouds',
            'extreme rain': 'bi bi-cloud-rain-heavy',
            'dust': 'bi bi-tornado',
            'moderate rain': 'bi bi-cloud-drizzle'
=======
>>>>>>> a49df4e (Initial commit with backend integration)
        };
        return iconMap[description] || 'bi bi-question-circle';
    };

    const getDailyAverages = (data) => {
        const dailyData = {};
        data.list.forEach(forecast => {
            const date = new Date(forecast.dt * 1000).toLocaleDateString();
<<<<<<< HEAD
=======
<<<<<<< HEAD
            const currentDayWeather = forecast.weather[0]
=======
>>>>>>> a49df4e (Initial commit with backend integration)
>>>>>>> e4c4ae7aa9a8897174556bba597382b03497bbef
            if (!dailyData[date]) {
                dailyData[date] = {
                    totalTemp: 0,
                    count: 0,
<<<<<<< HEAD
                    weather: forecast.weather[0].description
=======
<<<<<<< HEAD
                    weather: currentDayWeather.description
=======
                    weather: forecast.weather[0].description
>>>>>>> a49df4e (Initial commit with backend integration)
>>>>>>> e4c4ae7aa9a8897174556bba597382b03497bbef
                };
            }
            dailyData[date].totalTemp += forecast.main.temp;
            dailyData[date].count++;
        });

        return Object.entries(dailyData).map(([date, { totalTemp, count, weather }]) => ({
            date,
            avgTemp: (totalTemp / count).toFixed(1),
            weather
<<<<<<< HEAD
        }))
<<<<<<< HEAD
        .slice(1, 6); // Retrieve forecast for the next 5 days
=======
        //  retrieving only forecast for the next 5 days
        .slice(1, 6);
=======
        })).slice(1, 6);
>>>>>>> a49df4e (Initial commit with backend integration)
>>>>>>> e4c4ae7aa9a8897174556bba597382b03497bbef
    };

    useEffect(() => {
        fetchWeather('Tel Aviv');
    }, []);

    return (
        <div>
            <button className="toggle-button" onClick={() => setShowInput(!showInput)}>
                <i className={showInput ? 'bi bi-x-lg' : 'bi bi-search'}></i>
            </button>

            {showInput && (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter city"
                        value={inputCity}
                        onChange={(event) => setInputCity(event.target.value)}
                    />
                    <button type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                </form>
            )}
            
            {loading && <div className="spinner"></div>}
            {error && <p className="error-message">{error}</p>}
            {weatherData && (
                <>
                    <WeatherSummary weatherData={weatherData} getWeatherIcon={getWeatherIcon} />
<<<<<<< HEAD
                    <HourlyWeather city={city} getWeatherIcon={getWeatherIcon} />
=======
<<<<<<< HEAD
                    <HourlyWeather city={city} getWeatherIcon={getWeatherIcon} apiKey={apiKey} />
=======
                    <HourlyWeather city={city} />
>>>>>>> a49df4e (Initial commit with backend integration)
>>>>>>> e4c4ae7aa9a8897174556bba597382b03497bbef
                    <WeatherForecast dailyAverages={getDailyAverages(weatherData)} getWeatherIcon={getWeatherIcon} />
                </>
            )}
        </div>
    );
};

export default Weather;
