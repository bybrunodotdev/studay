import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import Signin from '~/pages/Auth/Signin';

import GlobalStyle from '~/styles/global';
import theme from '~/styles/theme';

import store from './store';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <Signin />
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>
);

export default App;
