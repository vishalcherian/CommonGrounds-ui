import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import {
  HomeScreen,
  LoginScreen,
  SignupScreen,
  ProfileScreen
} from './screens'
import './App.css'
import {
  NavBar
} from './components'
import theme from './theme/colors'

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NavBar />
          <div className="container">
            <Switch >
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/login" component={LoginScreen} />
              <Route exact path="/signup" component={SignupScreen} />
              <Route exact path="/profile" component={ProfileScreen} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
