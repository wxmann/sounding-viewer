const actionTypes = {
  SOUNDING_SELECTED: 'SOUNDING_SELECTED'
}

const setSounding = function(soundingData) {
  return {
    type: actionTypes.SOUNDING_SELECTED,
    soundingData
  }
}

export {
  actionTypes,
  setSounding
}