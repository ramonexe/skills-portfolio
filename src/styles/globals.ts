import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'TheAlchemist';
    src: url('/src/assets/fonts/TheAlchemist.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'FontError';
    src: url('/src/assets/fonts/FontError.TTF') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MainLux';
    src: url('/src/assets/fonts/MainLux.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'PirateOne';
    src: url('/src/assets/fonts/PirateOne.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  html {
    scroll-behavior: smooth;
  }  body {
    overflow-x: hidden;
    width: 100%;
    margin: 0;
    padding: 0;
        --s: 59px;
    --c1:rgba(14, 14, 14, 0.56);
    --c2:rgba(145, 139, 103, 0);
    
    --_g: #0000 52%,var(--c1) 54% 57%,#0000 59%; 
    background: 
    radial-gradient(farthest-side at -33.33% 50%,var(--_g)) 0 calc(var(--s)/2),
    radial-gradient(farthest-side at 50% 133.33%,var(--_g)) calc(var(--s)/2) 0,
    radial-gradient(farthest-side at 133.33% 50%,var(--_g)),
    radial-gradient(farthest-side at 50% -33.33%,var(--_g)),
    var(--c2);
    background-size: calc(var(--s)/4.667) var(--s),var(--s) calc(var(--s)/4.667);
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font-family: 'MainLux', sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
    position: relative;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 40vh;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.6) 20%,
        rgba(0, 0, 0, 0.4) 40%,
        rgba(0, 0, 0, 0.2) 60%,
        rgba(0, 0, 0, 0.1) 80%,
        transparent 100%
      );
      pointer-events: none;
      z-index: 1000;
      transition: opacity 0.3s ease;
    }

    a {
      text-decoration: none;
    }
  }

  h1 {
    font-family: 'TheAlchemist', serif;
  }

  h2, h3 {
    font-family: 'PirateOne', serif;
  }

  h4, h5, h6 {
    font-family: 'FontError', sans-serif;
  }

  p, span, li {
    font-family: 'MainLux', sans-serif;
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
    background: ${props => props.theme.colors.scrollbarTrack};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.scrollbarThumb};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.scrollbarThumbHover};
  }
`