import { createGlobalStyle } from 'styled-components';

import Reset from './resetStyle';

const GlobalStyle = createGlobalStyle`
${Reset};


body {
  font-family: 'Spoqa Han Sans Neo',-apple-system,'BlinkMacSystemFont',
  'Apple SD Gothic Neo','Inter','Segoe UI',sans-serif,'Apple Color Emoji',
  'Segoe UI Emoji','Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  box-sizing:border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

img, image, svg {
  vertical-align: middle;
}

`;

export default GlobalStyle;
