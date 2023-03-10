import { createGlobalStyle } from 'styled-components';
import '@fontsource/fira-code';

const GlobalStyles = createGlobalStyle`
*,*::before, *::after {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 outline: none;
}

html {
  font-size: 10px;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

body {
 font-family: "Fira Code";
 width: 100%;
 max-width: 100%;
 overflow-x: hidden;
 background: #CECECE;
 color: #191919;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

h1,h2,h3,h4,h5,h6 {
 margin: 0;
 padding: 0;
}

ul,li {
 list-style: none;
}

a {
 color: inherit;
 text-decoration: none;
}

button {
  background: #191919;
  border: 1px solid #191919;
  width: 100%;
}
`;

export default GlobalStyles;
