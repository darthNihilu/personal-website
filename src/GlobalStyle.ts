import { createGlobalStyle } from 'styled-components'
import { ThemeType } from 'components/Theme'

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body, input {
    font-family: 'Inter', sans-serif !important;
    font-style: normal;
  }

  body {
    background-color: ${({ theme }: { theme: ThemeType }) =>
      theme.backgroundColor};
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  
  b {
    font-weight: bold;
  }
`
