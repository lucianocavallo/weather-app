import arrow from '../../assets/icons/arrow.svg';

import {
  Container,
  MainTitle,
  Card,
  CardTitle,
  CardInfo,
  WindDirection,
  HumidityBarContainer,
  HumidityBar,
  HumidityScale,
  HumidityPercentage,
} from './styles';

const Highlights: React.FC<HighlightsProps> = ({ current }) => {
  const windDirection = (deg: number) => {
    if ((deg <= 10 && deg >= 0) || (deg >= 350 && deg <= 360)) return 'N';
    if (deg <= 100 && deg >= 80) return 'E';
    if (deg <= 190 && deg >= 170) return 'E';
    if (deg <= 280 && deg >= 270) return 'E';
    if (deg > 0 && deg <= 90) {
      return 'ENE';
    }
    if (deg > 90 && deg <= 180) {
      return 'ESE';
    }
    if (deg > 180 && deg <= 270) {
      return 'WSW';
    }
    if (deg > 270 && deg <= 360) {
      return 'WNW';
    }
  };

  const windDirArrow = (deg: number) => {
    return deg;
  };

  return (
    <>
      {current.dt && (
        <>
          <MainTitle>Todays Highlights</MainTitle>
          <Container>
            <Card className="top">
              <CardTitle>Wind status</CardTitle>
              <CardInfo>
                <span>{current.wind.speed}</span>
                <span>mts/s</span>
              </CardInfo>
              <WindDirection>
                <img
                  src={arrow}
                  style={{
                    transform: `rotate(${windDirArrow(current.wind.deg)}deg)`,
                  }}
                  alt="wind direction arrow"
                />
                <span>{windDirection(current.wind.deg)}</span>
              </WindDirection>
            </Card>

            <Card className="top">
              <CardInfo>Humidity</CardInfo>
              <CardInfo>
                <span>{current.main.humidity}</span>
                <span>%</span>
              </CardInfo>

              <HumidityBarContainer>
                <HumidityScale>
                  <span>0</span>
                  <span>50</span>
                  <span>100</span>
                </HumidityScale>
                <HumidityBar>
                  <div style={{ width: `${current.main.humidity}%` }}></div>
                </HumidityBar>
                <HumidityPercentage>
                  <span>%</span>
                </HumidityPercentage>
              </HumidityBarContainer>
            </Card>

            <Card className="bottom">
              <CardTitle>Visibility</CardTitle>
              <CardInfo>
                <span>{current.visibility / 1000}</span>
                <span>km</span>
              </CardInfo>
            </Card>
            <Card className="bottom">
              <CardTitle>Air Pressure</CardTitle>
              <CardInfo>
                <span>{current.main.pressure}</span>
                <span>Hpa</span>
              </CardInfo>
            </Card>
          </Container>
        </>
      )}
    </>
  );
};

export { Highlights };
