import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  a:focus, a:active {
  outline: none;
  }

  ul, ol {
    list-style: none;
  }
`
