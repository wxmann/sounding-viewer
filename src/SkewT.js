import React, { Component } from 'react';

import { skewTArea } from './config/container';
import SkewTOutline from './plotting/SkewTOutline';

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

        <SkewTOutline />
      </svg>  
    )
  }
}