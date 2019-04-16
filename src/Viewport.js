import React, { Component } from 'react';
import SkewT from './SkewT';

export default class Viewport extends Component {
  render() {
    return (
      <SkewT soundingData={this.props.soundingResult}/>
    )
  }
};
