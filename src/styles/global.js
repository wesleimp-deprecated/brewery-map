import { createGlobalStyle } from 'styled-components';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F5F5F5;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }

  html, body, #root {
    height: 100%;
  }
`;

export default GlobalStyle;