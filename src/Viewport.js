import React from 'react';
import SkewT from './SkewT';
import {
  containerHeight,
  containerWidth
} from './config/container';

export default function Viewport(props) {
  return (
    <svg
      id="viewport" 
      x="0"
      y="0"
      width={containerWidth}
      height={containerHeight}
    >
      <SkewT soundingData={props.soundingData} />
    </svg>
  )
}
