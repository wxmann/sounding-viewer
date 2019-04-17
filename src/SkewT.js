import React, { Fragment } from 'react';

import { 
  skewTArea,
  skewTLabelArea
} from './config/container';
import SkewTOutline from './plotting/SkewTOutline';
import Profile from './plotting/Profile';
import IsothermLabels from './plotting/IsothermLabels';
import PressureLevelLabels from './plotting/PressureLevelLabels';

export default function SkewT(props) {
  return (
    <Fragment>
    <svg
      id="skewTOutline" 
      x="0"
      y="0"
      width={skewTArea.width}
      height={skewTArea.height}
    >

      <rect 
        width={skewTArea.width}
        height={skewTArea.height}
        stroke="black"
        strokeWidth="3px"
        fill="none"
      />

      <SkewTOutline />
      <Profile soundingData={props.soundingData} />
      {/* <IsothermLabels /> */}
    </svg>
    
    <svg
      id="skewTLabels"
      x={skewTLabelArea.x}
      y={skewTLabelArea.y}

    >
      <IsothermLabels />
      <PressureLevelLabels />
    </svg>
    </Fragment>
  )
}