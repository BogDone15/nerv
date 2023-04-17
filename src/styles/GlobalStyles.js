import '@fontsource/fira-code';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,*::before, *::after {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
 outline: none;
}

html {
  font-size: 14px;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  @media screen and (max-width: 2300px) {
    font-size: 12px;
  }
  @media screen and (max-width: 2100px) {
    font-size: 11px;
  }
  @media screen and (max-width: 1920px) {
    font-size: 10px;
  }
  @media screen and (max-width: 1700px) {
    font-size: 9px;
  }
  @media screen and (max-width: 1600px) {
    font-size: 8.5px;
  }
  @media screen and (max-width: 1500px) {
    font-size: 8px;
  }
  @media screen and (max-width: 1400px) {
    font-size: 7.5px;
  }
  @media screen and (max-width: 1300px) {
    font-size: 7px;
  }
  @media screen and (max-width: 1200px) {
    font-size: 6.5px;
  }
  @media screen and (max-width: 1100px) {
    font-size: 10px;
  }
  @media screen and (max-width: 750px) {
    font-size: 9px;
  }
  @media screen and (max-width: 650px) {
    font-size: 8.5px;
  }
  @media screen and (max-width: 600px) {
    font-size: 7px;
  }
  @media screen and (max-width: 550px) {
    font-size: 6.5px;
  }
  @media screen and (max-width: 500px) {
    font-size: 6px;
  }
  @media screen and (max-width: 380px) {
    font-size: 5.5px;
  }
  @media screen and (max-width: 330px) {
    font-size: 5px;
  }
}

body {
 font-family: "Fira Code";
 width: 100%;
 max-width: 100%;
 overflow-x: hidden;
 background: #CECECE;
 color: #191919;
}

canvas,
#presentation1-container-obj-ovvvport {
  background-color: transparent !important;
}

#presentation1-container-obj-nosize {
  height: 43rem !important;
  padding-bottom: 0 !important;
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
  font-family: "Fira Code";
  background: #191919;
  border: 1px solid #191919;
  width: 100%;
}

input {
  padding: 0 1rem;
}
`;

export default GlobalStyles;
