import React from 'react';
import SkewT from './SkewT';
import {
  containerHeight,
  containerWidth
} from './config/container';
import Hodograph from './Hodograph';
import {
  setSounding
} from './actions';
import { connect } from 'react-redux';

function Viewport() {
  return (
    <svg
      id="viewport" 
      x="0"
      y="0"
      width={containerWidth}
      height={containerHeight}
    >
      <SkewT />
      {/* <Hodograph soundingData={props.soundingData} /> */}
    </svg>
  )
}

// export default Viewport = connect(stateToProps)(Viewport);
export default Viewport;
