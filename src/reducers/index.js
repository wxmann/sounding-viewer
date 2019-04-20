import { actionTypes } from '../actions';

const initialState = {
  soundingData: null,
  error: null
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SOUNDING_LOADED: 
      return Object.assign({}, {
        ...state,
        error: null,
        soundingData: action.soundingData
      })
    case actionTypes.SOUNDING_ERRORED:
      return Object.assign({}, {
        ...state,
        error: action.error
      })
    default: return state
  }
}