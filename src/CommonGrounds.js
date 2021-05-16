import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

import {
  HomeScreen,
  LoginScreen,
  SignupScreen,
  ProfileScreen
} from './screens'
import AuthRoute from './util/AuthRoute'
import { connect } from 'react-redux'
import { getUserData } from './redux/actions/userAction'

const CommonGrounds = ( { getUserData, authenticated } ) => {

  useEffect( () => {
    const token = localStorage.FBIdToken;
    if ( token ) {
      const decodedToken = jwtDecode( token )
      if ( decodedToken.exp * 1000 < new Date().getTime ) {
        window.location.href = '/login'
      }
      getUserData()
    }
  }, [] )

  return (
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
  )
}

const mapStateToProps = ( state ) => {
  return {
    authenticated : state.user.authenticated,
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    getUserData : () => dispatch( getUserData() )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CommonGrounds )