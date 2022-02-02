import styled, { createGlobalStyle } from 'styled-components';
import vars from './vars';
const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  background:#100E1D;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  .App {
  color: ${vars.pr_white};
  display: flex;
  flex-direction: column;
  }

  @media (min-width: 900px) {
    .App {
      flex-direction: row;
    }
  }
`;

export { GlobalStyle };
