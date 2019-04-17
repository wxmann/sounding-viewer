import React, { Fragment } from 'react';

import { 
  skewTArea,
  skewTLabelArea,
  skewTWindBarbs
} from './config/container';
import SkewTOutline from './plotting/SkewTOutline';
import Profile from './plotting/Profile';
import IsothermLabels from './plotting/IsothermLabels';
import PressureLevelLabels from './plotting/PressureLevelLabels';
import WindBarbLiner from './plotting/WindBarbLiner';

export default function SkewT(props) {
  return (
    <Fragment>
      <svg
        id="skewTLabels"
        x={skewTLabelArea.x}
        y={skewTLabelArea.y}
        width={skewTLabelArea.width}
        height={skewTLabelArea.height}
      >
        <PressureLevelLabels />
        <IsothermLabels />
      </svg>

      <svg
        id="skewTContent" 
        x={skewTArea.x}
        y={skewTArea.y}
        width={skewTArea.width}
        height={skewTArea.height}
      >
        <SkewTOutline />
        <Profile soundingData={props.soundingData} />
      </svg>

      <svg
        id="skewTWindBarbLiner"
        x={skewTWindBarbs.x}
        y={skewTWindBarbs.y}
        width={skewTWindBarbs.width}
        height={skewTWindBarbs.height}
      >
        <WindBarbLiner soundingData={props.soundingData} />
      </svg>
    </Fragment>
  )
}