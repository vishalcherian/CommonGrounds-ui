import axios from 'axios'

import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../types'
import Config from '../../Config'

const setErrors = ( err ) => async ( dispatch ) => {
  console.log( err )
  const reduceObj = {
    type : SET_ERRORS
  }
  if ( err.response ) {
    reduceObj.payload = err.response.data.error
  } else if ( err.request ) {
    reduceObj.payload = err.request.data.error
  } else {
    reduceObj.payload = 'Something went wrong, please try again later'
  }
  dispatch( reduceObj )
}

export const loginUser = ( userData, history ) => async ( dispatch ) => {
  dispatch( { type : CLEAR_ERRORS } )
  dispatch( { type : LOADING_UI } )
  try {
    const res = await axios.post( `${Config.BASE_URL}/login`, userData )
    const FBIdToken = `Bearer ${res.data.token}`
    localStorage.setItem( 'FBIdToken', FBIdToken )
    axios.defaults.headers.common[ 'Authorization' ] = FBIdToken

    dispatch( getUserData() )
    dispatch( { type : CLEAR_ERRORS } )
    history.push( '/' )
  } catch ( err ) {
    dispatch( setErrors ( err ) )
  }
}

export const signupUser = ( newUserData, history ) => async ( dispatch ) => {
  dispatch( { type : CLEAR_ERRORS } )
  dispatch( { type : LOADING_UI } )
  try {
    const res = await axios.post( `${Config.BASE_URL}/signup`, newUserData )
    const FBIdToken = `Bearer ${res.data.token}` 
    localStorage.setItem( 'FBIdToken', FBIdToken )
    axios.defaults.headers.common[ 'Authorization' ] = FBIdToken
    dispatch( getUserData() )
    dispatch( { type : CLEAR_ERRORS } )
    history.push( '/' )
  } catch ( err ) {
    dispatch( setErrors( err ) )
  }
}

export const getUserData = () => async ( dispatch ) => {
  try {
    const FBIdToken = localStorage.getItem( 'FBIdToken' )
    const res = await axios.get( `${Config.BASE_URL}/user`, { headers : { Authorization : FBIdToken } } )
    dispatch( {
      type : SET_USER,
      payload : res.data
    } )
  } catch ( err ) {
    console.error( err )
  }
}