import { actionTypes } from '../actions';

const initialState = {
  soundingData: null,
  isLoading: false,
  error: null,
  soundingParams: null
}

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SOUNDING_LOAD_START:
      return Object.assign({}, {
        ...state,
        isLoading: true,
        error: null,
        query: action.soundingQuery
      })
    case actionTypes.SOUNDING_LOAD_SUCCESS: 
      return Object.assign({}, {
        ...state,
        error: null,
        isLoading: false,
        soundingData: action.soundingData,
        soundingParams: action.soundingParameters
      })
    case actionTypes.SOUNDING_LOAD_ERROR:
      return Object.assign({}, {
        ...state,
        isLoading: false,
        error: action.error
      })
    default: return state
  }
}