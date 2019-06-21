import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '~/styles/global';
import theme from '~/styles/theme';

import store from './store';

import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <Routes />
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>
);

export default App;
