import React, { Component } from 'react';

import { skewTArea } from './config/container';
import Isotherms from './plotting/Isotherms';
import PressureLevels from './plotting/PressureLevels';
import MixingRatios from './plotting/MixingRatios';

export default class SkewT extends Component {
  render() {
    return (
      <svg 
        x={skewTArea.x}
        y={skewTArea.y}
        width={skewTArea.width}
        height={skewTArea.height}>

        <rect 
          width="100%" 
          height="100%"
          stroke="black"
          strokeWidth="3px"
          fill="none"
        />

        <Isotherms />
        <PressureLevels />
        <MixingRatios />
      </svg>  
    )
  }
}