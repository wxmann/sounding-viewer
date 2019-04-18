import React from 'react';

import { getPathStr, extract_pT_Field } from '../utils/plot-helpers';

const commonTraceStyle = {
  strokeWidth: 3.5,
  opacity: 1.0,
  fill: 'none'
}

export default class TempTrace extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundingData: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({soundingData: nextProps.soundingData});
    }
  }

  render() {
    let data = this.state.soundingData;

    if (data === null) {
      return null;
    } 
  
    return (
      <g id="profiles">
        <path 
          id="temperatureTrace"
          d={
            getPathStr(
              extract_pT_Field(data.data, 'temperature')
            )
          }
          stroke="red"
          style={commonTraceStyle}
        />

        <path 
          id="dewpointTrace"
          d={
            getPathStr(
              extract_pT_Field(data.data, 'dewpoint')
            )
          }
          stroke="green"
          style={commonTraceStyle}
        />
      </g>
    )
  }
  
}