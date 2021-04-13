import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import jwtDecode from 'jwt-decode'

import {
  HomeScreen,
  LoginScreen,
  SignupScreen,
  ProfileScreen
} from './screens'
import './App.css'
import theme from './theme/colors'
import AuthRoute from './util/AuthRoute'

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

console.log( 'authenticated:', authenticated )
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
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
      </div>
    </MuiThemeProvider>
  );
}

export default App;
