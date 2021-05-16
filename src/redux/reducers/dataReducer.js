import { SET_POSTS } from '../types'

const initialState = { 
  posts : []
}

const action = ( state = initialState, action ) => {
  switch( action.type ) {
    case SET_POSTS:
      const newState = { ...state, ...action.payload }
      return newState
    default:
      return state
  }
}

export default action
