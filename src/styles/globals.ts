import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    width: 100%;
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #0D0316, #961FFF);
    background-color: #e5e5f7;
    background-image: 
        repeating-radial-gradient(circle at 145px 40px, transparent 0, #00000042 120px),
        repeating-linear-gradient(#09000f, #24003e);
    background-blend-mode: multiply, multiply;
    color: ${props => props.theme.colors.text};
    font-family: 'Roboto';

    a {
      text-decoration: none;
    }
  }

  #root {
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`