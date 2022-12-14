import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

import theme from 'styles/theme';
import RootRoute from 'router/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RootRoute />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
