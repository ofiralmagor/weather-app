// Import required modules
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');


dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = 5000; // Backend will run on port 5000

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Define an endpoint to send the API key
app.get('/api/key', (req, res) => {
    res.json({ apiKey: process.env.OPENWEATHER_API_KEY });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
