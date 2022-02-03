import React, { useEffect } from 'react';

import heavyRain from '../../assets/imgs/HeavyRain.png';
import clear from '../../assets/imgs/Clear.png';
import lightCloud from '../../assets/imgs/LightCloud.png';
import heavyClouds from '../../assets/imgs/heavy-clouds.svg';
import snow from '../../assets/imgs/Snow.png';

import { dateConverter } from '../../utils/dateConverter';
import { kelvinToCelsius } from '../../utils/tempConverter';

import { Container, Date, Image, TempContainer } from './styles';

const ForecastCard: React.FC<ForecastProps> = ({ forecast, index }) => {
  const [imgSrc, setImgSrc] = React.useState(null);

  useEffect(() => {
    (() => {
      if (forecast.dt) {
        const weather = forecast.weather[0].description;
        if (weather === 'clear sky') {
          return setImgSrc(clear);
        } else if (
          weather === 'overcast clouds' ||
          weather === 'scattered clouds' ||
          weather === 'few clouds' ||
          weather === 'broken clouds'
        ) {
          return setImgSrc(lightCloud);
        } else if (
          weather === 'light rain' ||
          weather === 'light intensity drizzle' ||
          weather === 'moderate rain' ||
          weather === 'drizzle'
        ) {
          return setImgSrc(heavyRain);
        } else if (weather === 'light snow' || weather === 'snow') {
          return setImgSrc(snow);
        } else if (weather === 'mist') {
          return setImgSrc(heavyClouds);
        } else {
          return null;
        }
      }
    })();
  }, [forecast.dt, forecast.weather]);

  return (
    <Container>
      <Date>{index === 0 ? 'Tomorrow' : dateConverter(forecast.dt)}</Date>
      <Image
        src={imgSrc ? imgSrc : ''}
        alt="forecast image"
        className="WaForecastCard__img"
      />
      <TempContainer>
        <span>{kelvinToCelsius(forecast.main.temp_max)}ºC</span>
        <span>{kelvinToCelsius(forecast.main.temp_min)}ºC</span>
      </TempContainer>
    </Container>
  );
};

export { ForecastCard };
