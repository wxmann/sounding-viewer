import React from 'react';
import { connect } from 'react-redux';

import {
  hodographArea
} from './config/container'
import HodographOutline from './plotting/HodographOutline';
import HodographTrace from './plotting/HodographTrace';

function Hodograph(props) {
  let soundingData = props.soundingData;
  if (soundingData === null) {
    return null;
  }
  return (
    <svg
      id="hodograph"
      x={hodographArea.x}
      y={hodographArea.y}
      width={hodographArea.width}
      height={hodographArea.height}
    >
      <HodographOutline />
      <HodographTrace soundingData={soundingData} />
    </svg>
  )
}

const stateToProps = function(state) {
  return {
    soundingData: state.soundingData
  }
};

export default connect(stateToProps)(Hodograph);