const baseForecastUrl = process.env.BASE_FORECAST_URL;
const baseCurrentUrl = process.env.BASE_CURRENT_URL;
const apiKey = process.env.API_KEY;

let fetchCurrent = async (location: string) => {
  const res = await fetch(`${baseCurrentUrl}${location}${apiKey}`);
  return res;
};

let fetchForecast = async (location: string) => {
  const res = await fetch(`${baseForecastUrl}${location}${apiKey}`);
  const data = await res.json();
  return data;
};

export { fetchForecast, fetchCurrent };
