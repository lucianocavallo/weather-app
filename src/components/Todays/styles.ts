import styled from 'styled-components';
import vars from '../../styles/vars';
import clouds from '../../assets/imgs/Cloud-background.png';
import location from '../../assets/icons/location.svg';

const Container = styled.div`
  position: relative;
  max-width: 450px;
  min-width: 340px;
  height: 800px;
  padding: 0 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 0;
  overflow: hidden;
  @media (min-width: 900px) {
    height: 100vh;
  }
`;

const CloudsBgContainer = styled.div`
  position: absolute;
  right: calc(50% - 250px);
  left: calc(50% - 250px);
  width: 100%;
  z-index: -1;
`;

const CloudsBg = styled.span`
  display: inline-block;
  width: 500px;
  height: 300px;
  background-image: url(${clouds});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  & span {
    display: inline-block;
    width: 100%;
    height: 100%;
    background: ${vars.pr_bg};
    opacity: 0.5;
  }
`;

const PrimaryImg = styled.img`
  margin: 70px 0 10px;
  width: 200px;
  height: 200px;
  object-fit: contain;
`;

const TempContainer = styled.div`
  margin-top: 70px;
  & span:nth-child(1) {
    font-size: 8rem;
    font-weight: 500;
    color: ${vars.pr_white};
  }
  & span:nth-child(2) {
    font-size: 3rem;
    color: ${vars.pr_grey};
  }
`;

const Weather = styled.div`
  margin-top: 40px;
  font-size: 2.2rem;
  font-weight: 600;
  color: ${vars.pr_grey};
`;

const DateContainer = styled.div`
  margin-top: 60px;
  font-size: 1rem;
  font-weight: 500;
  color: ${vars.pr_grey};
`;

const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 80px;
  font-size: 1rem;
  font-weight: 500;
  color: ${vars.pr_grey};
  & span:nth-child(1) {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-right: 5px;
    background-image: url(${location});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`;

export {
  Container,
  CloudsBgContainer,
  CloudsBg,
  PrimaryImg,
  TempContainer,
  Weather,
  DateContainer,
  LocationContainer,
};
