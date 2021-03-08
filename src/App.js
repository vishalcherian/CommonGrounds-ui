import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {
  HomeScreen,
  LoginScreen,
  ProfileScreen
} from './screens/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/home" component={LoginScreen} />
          <Route exact path="/home" component={ProfileScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
