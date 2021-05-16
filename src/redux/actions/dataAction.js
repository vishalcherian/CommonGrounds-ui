import axios from 'axios'

import Config from '../../Config'
import { SET_POSTS, CLOSE_REVIEW_SCREEN } from '../types'

export const getPosts = () => ( dispatch ) => {
  const posts = []

  dispatch( {
    type : SET_POSTS,
    payload : {
      posts
    }
  } )
}

export const postNewReview = ( body ) => async ( dispatch ) => {
  try {
    const FBIdToken = await localStorage.getItem( 'FBIdToken' )
    const res = axios.post( `${Config.BASE_URL}/post`, body, { headers : { Authorization : FBIdToken } } )
    if ( res ) {
      dispatch ( { type : CLOSE_REVIEW_SCREEN } )
      // dispatch ( { type : NEW_TOAST_NOTIFICATION, payload : { level : 'success', msg : 'Review successfully posted } } )
      console.log( 'Review successfully posted' )
    }
  } catch ( err ) {
    console.error( err )
  }
}