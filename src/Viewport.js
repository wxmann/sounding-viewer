import React from 'react';
import SkewT from './SkewT';
import {
  containerHeight,
  containerWidth
} from './config/container';
import Hodograph from './Hodograph';

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
      <Hodograph soundingData={props.soundingData} />
    </svg>
  )
}
