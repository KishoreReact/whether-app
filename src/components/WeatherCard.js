// src/components/WeatherCard.js

import React from 'react';
import { WiDaySleet } from 'react-icons/wi';
import weatherImage from '../assets/images/weather-image.jpg';

const WeatherCard = ({ weather }) => {
  if (!weather) return <p>Loading...</p>;

  //const { city_name, temp, weather: { description, icon } } = weather.data[0];
console.log(weather);
const dailyData = weather.periods.map(day => ({
  time: new Date(day.dateTimeISO).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
  temp: `${day.avgTempC}°C`,
}));
  

  return (
    <div style={{ backgroundImage: `url(${weatherImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '300px' }} className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:space-x-4">
       
      <div className="bg-gray-100 p-4 rounded-lg md:w-96">
  <h2 className="text-2xl font-bold mb-2 text-center">Today</h2>
  <div className="flex items-center justify-center mb-4">
    <span className="text-6xl font-bold">25°C</span>
    <WiDaySleet className="w-16 h-16 ml-4" />
  </div>
  <p className="text-center text-lg font-semibold mb-2">Winter</p>
  <p className="text-center mb-2">{weather.place.name}</p>
  <p className="text-center">Feels like 25°C</p>
</div>

      <div className='flex-col w-96'>
      <div className="bg-gray-100 p-4 rounded-lg flex-1">
        <div className="mb-4 grid grid-cols-2 md:grid-cols-5 gap-4">
        {dailyData.map((day, index) => (
          <div key={index} className={`bg-gray-100 p-4 rounded-lg ${index > 4 ? 'mt-4  pt-4' : ''}`}>
            <h3 className="text-lg font-bold mb-2">{day.time}</h3>
            <p>{day.temp}</p>
          </div>
        ))}
        </div>
    
      </div>
      <div className="bg-gray-100 p-4 rounded-lg flex-1 mt-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Random Text</h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel urna sed justo imperdiet vehicula. In hac habitasse platea dictumst.
            Suspendisse sed aliquam tellus. Ut gravida nulla in dignissim porta. Fusce nec tristique mi. Donec nec sollicitudin elit. Integer maximus at
            nisi ac interdum. Nullam sollicitudin massa vel nulla mattis ullamcorper. Ut gravida nulla in dignissim porta.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default WeatherCard;
