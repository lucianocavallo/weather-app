import styled from 'styled-components';
import vars from '../../styles/vars';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 170px;
  background: ${vars.pr_bg};
  font-weight: 500;
`;

const Date = styled.p`
  margin-top: 15px;
  color: ${vars.pr_white};
`;

const Image = styled.img`
  margin-top: 10px;
  width: 60px;
  height: 60px;
  object-fit: contain;
`;

const TempContainer = styled.div`
  margin-top: 25px;
  width: 70%;
  display: flex;
  justify-content: space-between;
  & span {
    color: ${vars.pr_white};
  }
  & span:nth-child(2) {
    color: ${vars.pr_grey};
  }
`;

export { Container, Date, Image, TempContainer };
