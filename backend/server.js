
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');


dotenv.config(); 

const app = express();
const PORT = 5000; 


app.use(cors());

// Define an endpoint to send the API key
app.get('/api/key', (req, res) => {
    res.json({ apiKey: process.env.OPENWEATHER_API_KEY });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
