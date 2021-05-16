import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI, OPEN_REVIEW_SCREEN, CLOSE_REVIEW_SCREEN } from '../types'

const initialState = {
    loading : false, 
    errors : null,
    reviewScreenOpen : false
}

const uiReducer = ( state = initialState, action ) => {
  switch( action.type ) {
    case SET_ERRORS:
      return {
        ...state,
        loading : false,
        errors : action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        loading : false,
        errors : null
      }
    case LOADING_UI:
      return {
        ...state,
        loading : true
      }
    case OPEN_REVIEW_SCREEN:
      return {
        ...state,
        reviewScreenOpen : true
      }
    case CLOSE_REVIEW_SCREEN:
      return {
        ...state,
        reviewScreenOpen : false
      }
    default:
      return state
  }
}

export default uiReducer
