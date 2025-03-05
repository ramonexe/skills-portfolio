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
    background-color: #000000;
    background-attachment: fixed;
    background-size: cover;
    color: ${props => props.theme.colors.text};
    font-family: 'Roboto', sans-serif;

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

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`