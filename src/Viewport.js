import React, { Component } from 'react';
import SkewT from './SkewT';

export default class Viewport extends Component {
  render() {
    return (
      // <div className="sounding-data">
      //   {this.props.soundingResult}
      // </div>
      <SkewT soundingData={this.props.soundingResult}/>
    )
  }
};
