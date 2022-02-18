import Theme from "interfaces/Theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    @font-face {
      font-family: 'Roboto', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');
    }
    background-color: ${({ theme }: { theme: Theme }) => theme.body};
    color: ${({ theme }) => theme.text.primary};
    font-family: 'Roboto', sans-serif;
    transition: all 0.50s linear;
    box-sizing: border-box;
  }
`;

export default GlobalStyles;