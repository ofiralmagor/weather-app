// Import required modules
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000; // Use Render's PORT or default to 5000

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Serve static files from the frontend build folder
app.use(express.static(path.join(__dirname, '../dist')));

// Define an endpoint to send the API key
app.get('/api/key', (req, res) => {
    res.json({ apiKey: process.env.OPENWEATHER_API_KEY });
});

// Fallback route: serve index.html for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
