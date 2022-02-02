import React from 'react';
import { fetchCurrent, fetchForecast } from '../utils/fetchApi';

const useWeather = () => {
  const [searching, setSearching] = React.useState<boolean>(false);

  const [currentWeather, setCurrentWeather] = React.useState<Current>({});
  const [forecastWeather, setForecastWeather] = React.useState<Forecast[]>([]);

  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const fetchCurrentWeather = async (location: string) => {
    setLoading(true);

    const res = await fetchCurrent(location);
    if (res.status === 200) {
      const data = await res.json();
      setCurrentWeather(data);

      // Forecast call
      const dataForecast = await fetchForecast(location);
      let forecastArray = [];
      for (let i = 7; i < 33; i += 8) {
        forecastArray.push(dataForecast.list[i]);
      }
      setForecastWeather(forecastArray);
      setSearching((prevVal) => !prevVal);
      setLoading(false);
    } else {
      console.error(`The server responded with a ${res.status} status`);
      setError(true);
      setTimeout(() => setError(false), 3000);
      setLoading(false);
    }
  };

  return {
    searching,
    loading,
    error,
    currentWeather,
    forecastWeather,
    setSearching,
    fetchCurrentWeather,
  };
};

export { useWeather };
