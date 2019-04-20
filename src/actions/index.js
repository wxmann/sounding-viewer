import fetchRaobFromDatasource from '../fetchRaob';

const actionTypes = {
  SOUNDING_LOADED: 'SOUNDING_LOADED',
  SOUNDING_ERRORED: 'SOUNDING_ERRORED'
}

const fetchSounding = function(soundingOptions) {
  return async (dispatch) => {
    try {
      let soundingData = await fetchRaobFromDatasource(soundingOptions);
      dispatch({ type: actionTypes.SOUNDING_LOADED, soundingData })
    } catch (error) {
      dispatch({ type: actionTypes.SOUNDING_ERRORED, error })
    }
  }
}

// const setSounding = function(soundingData) {
//   return {
//     type: actionTypes.SOUNDING_LOADED,
//     soundingData
//   }
// }

export {
  actionTypes,
  fetchSounding
}