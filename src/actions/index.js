import { fetchRaob, fetchParameters } from '../fetchData';

const actionTypes = {
  SOUNDING_LOAD_START: 'SOUNDING_LOAD_START',
  SOUNDING_LOAD_SUCCESS: 'SOUNDING_LOAD_SUCCESS',
  SOUNDING_LOAD_ERROR: 'SOUNDING_LOAD_ERROR'
}

const fetchSounding = function(soundingOptions) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.SOUNDING_LOAD_START, soundingQuery: soundingOptions});
      let soundingData = await fetchRaob(soundingOptions);
      let soundingParameters = await fetchParameters(soundingData);
      dispatch({ type: actionTypes.SOUNDING_LOAD_SUCCESS, soundingData, soundingParameters })
    } catch (error) {
      dispatch({ type: actionTypes.SOUNDING_LOAD_ERROR, error })
    }
  }
}

export {
  actionTypes,
  fetchSounding
}