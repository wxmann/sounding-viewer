import React from 'react';
import { connect } from 'react-redux';

import SkewT from './SkewT';
import Hodograph from './Hodograph';
import {
  containerHeight,
  containerWidth
} from './config/container';
import Loading from './Loading';
import NoSoundingFound from './NoSoundingFound';

function Viewport(props) {
  return (
    <div align="center">
      {
        props.isLoading ? 
          <Loading /> : props.error ? 
            <NoSoundingFound query={props.query}/> :
        (
          <svg
            id="viewport" 
            width={containerWidth}
            height={containerHeight}
            align="center"
          >
            <SkewT />
            <Hodograph />
          </svg>
        )
      }
    </div>
  )
}

const stateToProps = function(state) {
  return {
    isLoading: state.isLoading,
    error: state.error,
    query: state.query
  }
}

export default connect(stateToProps)(Viewport);
