import styled from 'styled-components';
import vars from '../../styles/vars';
import search from '../../assets/icons/search.svg';
import close from '../../assets//icons/close_cross.svg';

const Container = styled.div`
  position: relative;
  width: 350px;
  margin: 20px auto 0;
  padding: 0 10px;
`;

const Searching = styled.div`
  display: flex;
  justify-content: left;
  & button {
    width: 120px;
    height: 32px;
    cursor: pointer;
    color: ${vars.pr_white};
    background: ${vars.sc_grey};
    border: none;
  }
`;

const CloseCross = styled.span`
  position: relative;
  margin-bottom: 20px;
  left: 155px;
  display: inline-block;
  width: 15px;
  height: 15px;
  background-image: url(${close});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &:hover {
    cursor: pointer;
  }
`;

const SearchBarContainter = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputContainter = styled.div`
  display: flex;
  align-items: center;
  width: 74%;
  height: 100%;
  border: 1px solid ${vars.pr_white};
`;

const SearchIcon = styled.span`
  display: inline-block;
  margin: 0 10px;
  width: 15px;
  height: 15px;
  background-image: url(${search});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const SearchInput = styled.input`
  height: 100%;
  flex-grow: 1;
  font-family: 'Raleway', sans-serif;
  color: ${vars.pr_white};
  background: transparent;
  border: none;
  outline: none;
  &::placeholder {
    color: ${vars.th_grey};
  }
`;

const SearchButton = styled.button`
  width: 25%;
  height: 100%;
  background: ${vars.pr_blue};
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  border: 1px solid ${vars.pr_blue};
  color: ${vars.pr_white};
  &:hover {
    border: 1px solid ${vars.pr_white};
    cursor: pointer;
  }
`;

export {
  Container,
  Searching,
  CloseCross,
  SearchBarContainter,
  InputContainter,
  SearchIcon,
  SearchInput,
  SearchButton,
};
