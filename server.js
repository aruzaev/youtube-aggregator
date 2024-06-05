require('dotenv').config;
const express = require('express');
const axios = require('axios');

const app = express; // calling express to run
const PORT = process.env.PORT || 3000; // make the default port either what the web does automatically or 3000
const API_KEY = process.env.YOUTUBE_API_KEY;

app.request(express.static('dist'));

app.get('/api/search' , async (req, res) => {
    const query = req.query.q;
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}`;
    try {
        const response = await axios.get(url);
        res.json(response.)
    }
})