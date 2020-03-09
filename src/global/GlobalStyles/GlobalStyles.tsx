import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { ThemeInterface } from 'typings';

export const GlobalStyles = createGlobalStyle<ThemeInterface>`
  ${normalize}
  
  @font-face {
    font-family: Roboto, sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  }
  
  html {
    font-family: Roboto, sans-serif;
  }
  body {
    color: ${props => props.theme.colors.utils.text.dark};
    #hubspot-messages-iframe-container {
        z-index: 1000 !important;
      }
  }
  
  a {
    color: ${props => props.theme.colors.utils.link};
    text-decoration: none;
  }
  
  h1 {
    font-weight: 300;
    font-size: 96px;
    text-transform: none;
    letter-spacing: -0.015em;
  }
  
  h2 {
    font-weight: 300;
    font-size: 60px;
    text-transform: none;
    letter-spacing: -0.005em;
  }
  
  h3 {
    font-weight: normal;
    font-size: 48px;
    text-transform: none;
    letter-spacing: 0;
  }
  
  h4 {
    font-weight: normal;
    font-size: 34px;
    text-transform: none;
    letter-spacing: 0.0025em;
  }
  
  h5 {
    font-weight: normal;
    font-size: 24px;
    text-transform: none;
    letter-spacing: 0.0020em;
    margin: 0px;
    line-height:28px;
  }
  
  h6 {
    font-weight: 500;
    font-size: 20px;
    text-transform: none;
    letter-spacing: 0.0015em;
    line-height:23px;
  }  
  pre {
    font-family: Roboto, sans-serif;
  }
  span {
    font-family: Roboto, sans-serif;
  }
`;
