import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import SkewT from './SkewT';
import Hodograph from './Hodograph';
import Loading from './Loading';
import {
  containerHeight,
  containerWidth
} from './config/container';

function Viewport(props) {
  return (
    <Fragment>
      {
        props.isLoading ? 
          <Loading /> : 
        (
          <svg
            id="viewport" 
            // x="0"
            // y="0"
            width={containerWidth}
            height={containerHeight}
          >
            <SkewT />
            <Hodograph />
          </svg>
        )
      }
    </Fragment>
  )
}

const stateToProps = function(state) {
  return {
    isLoading: state.isLoading
  }
}

export default connect(stateToProps)(Viewport);
