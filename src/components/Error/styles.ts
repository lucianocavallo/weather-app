import styled from 'styled-components';
import vars from '../../styles/vars';

const Container = styled.div`
  margin-top: 50px;
  color: ${vars.err_color};
  & img {
    width: 150px;
    margin: 15px 0;
  }
`;

export { Container };
