"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 
 div[class*="chakra-select"] > div {
      display: none !important;
    }
 
  body {
    background-color: #fff; 
    font-family: 'Roboto', sans-serif;
   
  }
`;

export default GlobalStyle;
