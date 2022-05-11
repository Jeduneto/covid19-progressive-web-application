import React from "react";
import { StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core';
import GlobalStyle from './commons/style/global-style'
import Main from './containers/main/index'

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
