import React from 'react';

import { skewTArea } from './config/container';
import SkewTOutline from './plotting/SkewTOutline';
import Profile from './plotting/Profile';

export default function SkewT(props) {
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
      <Profile soundingData={props.soundingData} />
    </svg>  
  )
}