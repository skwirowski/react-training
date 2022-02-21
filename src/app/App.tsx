import GlobalStyles from 'components/globalStyles';
import { darkTheme, lightTheme } from 'components/themes';
import Menu from "pages/Menu";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = (theme: string) => () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const Button = styled.button`
    margin-bottom: 30px;
  `;

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Button onClick={toggleTheme(theme)}>switch theme</Button>
      <Menu />
    </ThemeProvider>
  );
}

export default App;
