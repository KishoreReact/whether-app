
const apiKey = '8cbefe5b47464790a255c44c715bdf00';

export const fetchWeatherData = async (city) => {
  const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
