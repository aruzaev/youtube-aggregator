const axios = require('axios');

module.exports = async (req, res) => {
  const query = req.query.q;
  const API_KEY = process.env.YOUTUBE_API_KEY;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${API_KEY}`;
  
  try {
    const response = await axios.get(url);
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching data from YouTube API:", error.message);
    res.status(500).json({ error: error.toString() });
  }
};
