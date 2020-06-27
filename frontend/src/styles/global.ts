import { createGlobalStyle } from 'styled-components';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toggle/style.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.title};
  }

  body, input, button, input::placeholder, textarea::placeholder {
    font: 16px 'Roboto Slab', serif;
  }
  input::placeholder, textarea::placeholder {
    color: #666360;
  }

  h1, h2, h3, h4, h5, h5, strong {
    font-weight: 500;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0px 1000px #232129 inset;
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }



  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
`;
