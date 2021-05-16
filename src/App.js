import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

import './App.css'
import theme from './theme/base'
import CommonGrounds from './CommonGrounds'

import store from './redux/store'

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <CommonGrounds />
      </Provider>
    </MuiThemeProvider>
  );
}

export default App
