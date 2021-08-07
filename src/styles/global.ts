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


/* Styling modal */

.react-modal-overlay{
  background: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;

}

.react-modal-content{
  width: 100%;
  max-width: 57.6rem;
  background: var(--background);
  padding: 4.8rem;
  position: relative;
  border-radius: .4rem;
}

.react-modal-close{
  position: absolute;
  right: 2.4rem;
  top: 2.4rem;
  border: 0;
  background: transparent;

  transition: filter .2s;

  &:hover{
    filter: brightness(0.8);
  }
}
`;
