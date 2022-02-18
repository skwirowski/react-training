import GlobalStyles from 'components/globalStyles';
import { darkTheme, lightTheme } from 'components/themes';
import Movies from 'pages/Movies';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = (theme: string) => () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button onClick={toggleTheme(theme)}>switch theme</button>
      <Movies />
    </ThemeProvider>
  );
}

export default App;
