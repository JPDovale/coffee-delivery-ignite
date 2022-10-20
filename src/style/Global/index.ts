import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-size: 1rem;

    color: ${({ theme }) => theme.Colors.baseText};
    background: ${({ theme }) => theme.Colors.background};
    transition: all 500ms;
    overflow-x: hidden;
  }

  body, button, input, textarea {
    font-family: ${({ theme }) => theme.FontFamilys.text};
  }
`
