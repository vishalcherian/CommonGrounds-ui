import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import jwtDecode from 'jwt-decode'
import { Provider } from 'react-redux'

import {
  HomeScreen,
  LoginScreen,
  SignupScreen,
  ProfileScreen
} from './screens'
import './App.css'
import theme from './theme/colors'
import AuthRoute from './util/AuthRoute'
import store from './redux/store'

let authenticated = false
const token = localStorage.FBIdToken;
if ( token ) {
  const decodedToken = jwtDecode( token )
  if ( decodedToken.exp * 1000 < new Date().getTime ) {
    window.location.href = '/login'
    authenticated = false
  }
  authenticated = true
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <div className="container">
            <Switch >
              <AuthRoute exact path="/login" component={LoginScreen} authenticated={authenticated} />
              <AuthRoute exact path="/signup" component={SignupScreen} authenticated={authenticated} />
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/profile" component={ProfileScreen} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
