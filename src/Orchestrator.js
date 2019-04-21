import React from 'react';
import { connect } from 'react-redux';

import LoadingIndicator from './LoadingIndicator';
import NoSoundingDialog from './NoSoundingDialog';
import Viewport from './Viewport';

function Orchestrator(props) {
  return (
    <div align="center">
      {
        props.isLoading ? 
          <LoadingIndicator /> : props.error ? 
            <NoSoundingDialog query={props.query}/> :
              <Viewport />
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

export default connect(stateToProps)(Orchestrator);
