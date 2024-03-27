const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 3000;

// Enable CORS middleware
app.use(cors());

// Define a route for your proxy endpoint
app.get('/proxy', async (req, res) => {
    try {
        // Extract the URL to proxy from the query parameters
        const url = req.query.url;

        if (!url) {
            return res.status(400).json({ error: 'URL parameter is missing' });
        }
        
        // Make a request to the external URL
        const response = await axios.get(url);

        // Send the response from the external URL to the client
        res.send(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.response.status, error.response.statusText);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
