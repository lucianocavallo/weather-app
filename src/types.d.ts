declare module '*.png';
declare module '*.svg';

interface Forecast {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [{ id: number; main: string; description: string; icon: string }];
}

type Current = CurrentW | {};

interface CurrentW {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface SecondarySectionProps {
  forecast: any;
  highlights: any;
}

interface SearchBarProps {
  searching: any;
  setSearching: any;
  fetchCurrentWeather: any;
}

interface TodaysProps {
  searching: any;
  current: any;
  loading: any;
  error: any;
}

interface ForecastProps {
  forecast: any;
  index: any;
}

interface HighlightsProps {
  current: any;
}
