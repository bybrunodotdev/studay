import React from 'react';
import { ThemeProvider } from 'styled-components';

import Signin from '~/pages/Auth/Signin';

import GlobalStyle from '~/styles/global';
import theme from '~/styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Signin />
      <GlobalStyle />
    </>
  </ThemeProvider>
);

export default App;
