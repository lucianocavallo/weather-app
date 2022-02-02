import { Container } from './styles';

import errorIcon from '../../assets/icons/error_icon.png';

const Error = () => {
  return (
    <>
      <Container>
        <h2>Ups, something has happened</h2>
        <img src={errorIcon} alt="error icon" />
        <h2>Please try again</h2>
      </Container>
    </>
  );
};

export { Error };
