import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');

  const searchVideos = async () => {
    try {
      const response = await axios.get(`/api/search?q=${query}`);
      setVideos(response.data.items);
      setError('');
    } catch (error) {
      console.error("Error fetching videos:", error.message);
      setError('Error fetching videos. Please try again.');
    }
  };

  return (
    <div>
      <h1>YouTube Aggregator</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <button onClick={searchVideos}>Search</button>
      {error && <p>{error}</p>}
      <div id="results">
        {videos.map((item) => (
          <iframe
            key={item.id.videoId}
            src={`https://www.youtube.com/embed/${item.id.videoId}`}
            width="560"
            height="315"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
}

export default App;
