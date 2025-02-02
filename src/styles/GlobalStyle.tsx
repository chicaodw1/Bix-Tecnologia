import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    background-color: fff; 
    color: 000;
    font-family: 'Arial', sans-serif; 
    height: 100%;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    font-family: inherit;
    color: inherit;
  }
`;

export default GlobalStyle;
