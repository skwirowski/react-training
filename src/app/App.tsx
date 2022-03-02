import GlobalStyles from 'components/globalStyles';
import { darkTheme, lightTheme } from 'components/themes';
import routes from "config/routes";
import Default from "pages/Default";
import Menu from "pages/Menu";
import Movies from "pages/Movies";
import People from "pages/People";
import Video from "pages/Video";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
      <Routes>
        <Route path={routes.home} element={<Menu />}>
          <Route path={routes.movies} element={<Movies />} />
          <Route path={routes.people} element={<People />} />
          <Route path={routes.video} element={<Video />} />
          <Route index element={<Default isCentered={true} />} />
          <Route path="*" element={<Default isCentered={true} />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
