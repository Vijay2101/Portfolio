import { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryColor: '#000000',
  secondaryColor: '#ffffff',
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
  }

  a {
    color: ${props => props.theme.secondaryColor};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  nav {
    background: #333;
    color: ${props => props.theme.secondaryColor};
    padding: 1rem;
  }

  .skip-to-content {
    position: absolute;
    top: 0;
    left: 0;
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.secondaryColor};
    padding: 0.5rem;
    z-index: 1000;
  }
`;
