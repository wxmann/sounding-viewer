import fetchRaobFromDatasource from '../fetchRaob';

const actionTypes = {
  SOUNDING_LOAD_START: 'SOUNDING_LOAD_START',
  SOUNDING_LOAD_SUCCESS: 'SOUNDING_LOAD_SUCCESS',
  SOUNDING_LOAD_ERROR: 'SOUNDING_LOAD_ERROR'
}

const fetchSounding = function(soundingOptions) {
  return async (dispatch) => {
    try {
      dispatch({ type: actionTypes.SOUNDING_LOAD_START});
      let soundingData = await fetchRaobFromDatasource(soundingOptions);
      dispatch({ type: actionTypes.SOUNDING_LOAD_SUCCESS, soundingData })
    } catch (error) {
      dispatch({ type: actionTypes.SOUNDING_LOAD_ERROR, error })
    }
  }
}

export {
  actionTypes,
  fetchSounding
}