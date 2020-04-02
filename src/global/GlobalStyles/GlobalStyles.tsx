import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import { ThemeInterface } from 'typings';

export const GlobalStyles = createGlobalStyle<ThemeInterface>`
  ${normalize}
  
  @font-face {
    font-family: Roboto, sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-display: swap;
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
    ${props => props.theme.typography.h1}
  }
  
  h2 {
    ${props => props.theme.typography.h2}
  }
  
  h3 {
    ${props => props.theme.typography.h3}
  }
  
  h4 {
    ${props => props.theme.typography.h4}
  }
  
  h5 {
    ${props => props.theme.typography.h5}
  }
  
  h6 {
    ${props => props.theme.typography.h6}
  }  
  pre {
    font-family: Roboto, sans-serif;
  }
  span {
    font-family: Roboto, sans-serif;
  }
`;
