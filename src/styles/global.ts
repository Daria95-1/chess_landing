import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;700&family=Merriweather:wght@400;700&display=swap');


  :root {
    --color-white: #ffffff;
    --color-grey: #D0D0D0;
    --color-beige: #E9DED4;
    --color-yellow: #FBCE51;
    --color-coral: #F54932;
    --color-blue: #3057A2;
    --color-black: #1F1F1F;

    --color-text: #313131;
    --color-text-grey: #787878;

    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    background: var(--color-white);
  }

  h1, h2, h3 {
    font-family: 'Merriweather', serif;
    margin: 0;
  }

  p, span, div {
    font-family: 'Golos Text', serif;
    margin: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    cursor: pointer;
  }
`;
