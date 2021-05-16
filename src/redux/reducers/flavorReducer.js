import { SET_UNSELECTED_FLAVORS, SET_HIGHLIGHTED_FLAVORS, SET_SELECTED_FLAVORS } from '../types'
import { coffeeNotesData, initialHighlights } from '../../util/CoffeeNotes'

// Object.keys( coffeeNotesData ).forEach( key => unselected[key] = true )
const initialState = {
    data : {}
}


const action = ( state = initialState, action ) => {
    switch( action.type ) {
        case SET_UNSELECTED_FLAVORS:
            return { ...state, ...action.payload }
        case SET_HIGHLIGHTED_FLAVORS:
            return { ...state, ...action.payload }
        case SET_SELECTED_FLAVORS:
            return { ...state, ...action.payload}
        default:
            return state
    }
}

export default action