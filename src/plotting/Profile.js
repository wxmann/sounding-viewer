import React, { Fragment } from 'react';

import { getPathStr, extract_pT_Field } from './plot-helpers';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soundingData: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props != nextProps) {
      this.setState({soundingData: nextProps.soundingData});
    }
  }

  render() {
    let data = this.state.soundingData;

    if (data === null) {
      return null;
    } 
  
    return (
      <Fragment>
        <path 
          id="temperatureTrace"
          d={
            getPathStr(
              extract_pT_Field(data.data, 'temperature')
            )
          }
          stroke="red"
          strokeWidth="4px"
          fill="none"
        />

        <path 
          id="dewpointTrace"
          d={
            getPathStr(
              extract_pT_Field(data.data, 'dewpoint')
            )
          }
          stroke="green"
          strokeWidth="4px"
          fill="none"
        />
      </Fragment>
    )
  }
  
}