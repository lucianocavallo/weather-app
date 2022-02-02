import styled from 'styled-components';
import vars from '../../styles/vars';

const Section = styled.section`
  position: relative;
  margin-top: 60px;
  width: 100%;
  @media (min-width: 900px) {
    margin-top: 30px;
  }
`;

const Conversion = styled.div`
  display: none;
  width: 90%;
  justify-content: flex-end;
  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    margin: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${vars.pr_grey};
  }
  @media (min-width: 900px) {
    display: flex;
  }
`;

const ForecastContainer = styled.div`
  width: 80%;
  margin: 20px auto 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  justify-content: center;
  gap: 25px;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 60px;
  right: calc(50% - 137px);
  text-align: center;
  & a {
    color: ${vars.pr_white};
  }
`;

export { Section, Conversion, ForecastContainer, Footer };
