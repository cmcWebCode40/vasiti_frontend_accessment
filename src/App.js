import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import Home from './pages/Home';
import theme from './themes/theme';
import ContextProvider from './context/ContextApi';

const App = () => {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </ContextProvider>

  )
}

export default App
