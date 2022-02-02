import { MainSection } from './components/MainSection';
import { SearchBar } from './components/SearchBar';
import { Todays } from './components/Todays';
import { SecondarySection } from './components/SecondarySection';
import { ForecastCard } from './components/ForecastCard';
import { Highlights } from './components/Highlights';
import { useWeather } from './hooks/useWeather';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  const {
    searching,
    loading,
    error,
    currentWeather,
    forecastWeather,
    setSearching,
    fetchCurrentWeather,
  } = useWeather();

  return (
    <div className="App">
      <GlobalStyle />
      <MainSection>
        <SearchBar
          searching={searching}
          setSearching={setSearching}
          fetchCurrentWeather={fetchCurrentWeather}
        />
        <Todays
          searching={searching}
          current={currentWeather}
          loading={loading}
          error={error}
        />
      </MainSection>
      <SecondarySection
        forecast={forecastWeather.map((forecast, index) => (
          <ForecastCard forecast={forecast} index={index} key={forecast.dt} />
        ))}
        highlights={<Highlights current={currentWeather} />}
      ></SecondarySection>
    </div>
  );
};

export { App };
