import styled, { keyframes } from 'styled-components';

const ballsLoading = keyframes`
  0%, 100% {opacity: 1}
  50% {opacity: 0; transform: scale(0.2)}
`;

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const LoadingBall = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: rgb(211, 211, 211);
  margin: 2px;
  &:nth-child(1) {
    animation: ${ballsLoading} 1s ease-in-out infinite;
  }
  &:nth-child(2) {
    animation: ${ballsLoading} 1s ease-in-out 0.1s infinite;
  }
  &:nth-child(3) {
    animation: ${ballsLoading} 1s ease-in-out 0.2s infinite;
  }
`;

export { Container, LoadingBall };
