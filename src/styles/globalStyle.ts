import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`

${reset}

html,
  body {
    padding: 0;
    margin: 0;
    min-width: 375px;
    font-family: 'LOTTERIADDAG';
  }

  *,
  *:before,
  *:after {
    font-family: SUIT;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    border: none;
  }

  button {
    background: none;
    padding: 0;
    border: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

`;

export default GlobalStyle;
