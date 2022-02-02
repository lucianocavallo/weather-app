import styled from 'styled-components';
import vars from '../../styles/vars';

const MainTitle = styled.h2`
  max-width: 350px;
  margin: 40px auto 10px;
  @media (min-width: 900px) {
    max-width: 650px;
  }
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto 90px;
  display: grid;
  justify-content: center;
  gap: 20px;
  grid-template-columns: 300px;
  @media (min-width: 900px) {
    grid-template-columns: 300px 300px;
  }
`;

const Card = styled.div`
  width: 300px;
  text-align: center;
  background: ${vars.pr_bg};
  &.top {
    height: 200px;
  }
  &.bottom {
    height: 160px;
  }
`;

const CardTitle = styled.p`
  margin-top: 15px;
`;

const CardInfo = styled.div`
  margin-top: 12px;
  & span:nth-child(1) {
    font-size: 4rem;
    font-weight: 600;
  }
  & span:nth-child(2) {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const WindDirection = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 25px;
    margin-right: 6px;
  }
`;

const HumidityBarContainer = styled.div`
  width: 80%;
  margin: 15px auto 0;
`;

const HumidityBar = styled.div`
  width: 100%;
  height: 10px;
  background: ${vars.pr_white};
  border-radius: 12px;
  overflow: hidden;
  & div {
    width: 60%;
    height: 100%;
    background: #ffec65;
  }
`;

const HumidityScale = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 0.7rem;
  margin-bottom: 2px;
  & span:nth-child(2) {
    margin-left: 10px;
  }
`;

const HumidityPercentage = styled.div`
  margin-top: 2px;
  font-size: 0.8rem;
  text-align: right;
`;

export {
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
};
