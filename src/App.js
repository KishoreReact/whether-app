
import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';
import weatherImage from './assets/images/weather-image.jpg';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://data.api.xweather.com/forecasts/minneapolis,mn?format=json&filter=day&limit=7&client_id=ifh7PtNDBJ0hVUn20O7P4&client_secret=3BfdNGDRvnehfNj4Bo2l5W75y7b3AtAd6Bso4fnT');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data.response[0].place.name);
        setWeatherData(data.response[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold mb-4">Weather App</h1>

      </header>
      <main className="container mx-auto">

        {weatherData ? <WeatherCard
          weather={weatherData}
        /> : <p>Loading...</p>}
      </main>
    </div>
  );
}

export default App;
