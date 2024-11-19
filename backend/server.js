const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000; // Backend will run on port 5000

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors({
    origin: '*', // Allow all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
}));

// Define an endpoint to fetch weather data
app.get('/api/weather', async (req, res) => {
    const city = req.query.city || 'Tel Aviv'; // Default to Tel Aviv if no city is provided
    const apiKey = process.env.OPENWEATHER_API_KEY;

    try {
        const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        );
        res.json(weatherResponse.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
