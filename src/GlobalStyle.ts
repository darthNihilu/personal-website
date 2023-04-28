import { createGlobalStyle } from 'styled-components'
import { ThemeType } from 'components/Theme'

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 400;
    font-style: normal;
    src: local('Inter Regular'), local('Inter-Regular'),
    url('./fonts/Inter-Medium.ttf') format('truetype');
     font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 500;
    font-style: normal;
    src: local('Inter Medium'), local('Inter-Medium'),
    url('./fonts/Inter-SemiBold.ttf') format('truetype');
     font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 600;
    font-style: normal;
    src: local('Inter SemiBold'), local('Inter-SemiBold'),
    url('./fonts/Inter-SemiBold.ttf') format('truetype');
     font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 700;
    font-style: normal;
    src: local('Inter Bold'), local('Inter-Bold'),
    url('./fonts/Inter-Bold.ttf') format('truetype');
     font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    font-weight: 800;
    font-style: normal;
    src: local('Inter ExtraBold'), local('Inter-ExtraBold'),
    url('./fonts/Inter-ExtraBold.ttf') format('truetype');
    font-display: swap;
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
