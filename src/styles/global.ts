import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 62.5%;
    --background:#f2f0f5;
    --red: #e52e4d;
    --blue:#5429CC;
    --blue-light:#6933FF;
    --text-title:#363f5f;
    --text-body:#969CB3;
    --shape:#FFFFFF;
    --green:#33cc95;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width:1088px){
      font-size: 1.5rem;
    }
    @media(max-width:1088px){
      font-size: 1.4rem;
    }

  }

  body{
    background: var(--background);
    -webkit-font-smoothing:antialiased;
  }

  body, input, textarea, button{
    font: 1.6rem  'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disable]{
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
