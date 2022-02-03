import React, { useEffect } from 'react';
import { Loading } from '../Loading';
import { Error } from '../Error';

import heavyRain from '../../assets/imgs/HeavyRain.png';
import clear from '../../assets/imgs/Clear.png';
import lightCloud from '../../assets/imgs/LightCloud.png';
import heavyClouds from '../../assets/imgs/heavy-clouds.svg';
import snow from '../../assets/imgs/Snow.png';

import { kelvinToCelsius } from '../../utils/tempConverter';
import { dateConverter } from '../../utils/dateConverter';

import {
  Container,
  CloudsBgContainer,
  CloudsBg,
  PrimaryImg,
  TempContainer,
  Weather,
  DateContainer,
  LocationContainer,
} from './styles';

const Todays: React.FC<TodaysProps> = ({
  searching,
  current,
  loading,
  error,
}) => {
  const [imgSrc, setImgSrc] = React.useState(null);

  useEffect(() => {
    (() => {
      if (current.dt) {
        const weather = current.weather[0].description;
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
  }, [current.dt, current.weather]);

  return (
    <Container>
      {error && <Error />}
      {loading && <Loading />}
      {!searching && current.dt && (
        <React.Fragment>
          <CloudsBgContainer>
            <CloudsBg>
              <span></span>
            </CloudsBg>
          </CloudsBgContainer>
          <PrimaryImg src={imgSrc ? imgSrc : ''} alt="todays weather image" />
          <TempContainer>
            <span>{kelvinToCelsius(current.main.temp)}</span>
            <span>ºC</span>
          </TempContainer>
          <Weather>{current.weather.main}</Weather>
          <DateContainer>
            <span>Today · </span>
            <span>{dateConverter(current.dt)}</span>
          </DateContainer>
          <LocationContainer>
            <span></span>
            <span>
              {current.name}, {current.sys.country}
            </span>
          </LocationContainer>
        </React.Fragment>
      )}
    </Container>
  );
};

export { Todays };
