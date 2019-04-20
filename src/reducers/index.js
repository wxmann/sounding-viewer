import { actionTypes } from '../actions';

const initialState = {
  soundingSelected: false
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SOUNDING_SELECTED: 
      return Object.assign({}, {
        ...state,
        soundingSelected: true,
        soundingData: action.soundingData
      })
    default: return state
  }
}