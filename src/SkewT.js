import React, { Fragment } from 'react';

import { 
  skewTArea,
  skewTLabelArea,
  skewTWindStaffArea
} from './config/container';
import SkewTOutline from './plotting/SkewTOutline';
import TempTrace from './plotting/TempTrace';
import IsothermLabels from './plotting/IsothermLabels';
import PressureLabels from './plotting/PressureLabels';
import WindStaff from './plotting/WindStaff';

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
        <PressureLabels />
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
        <TempTrace soundingData={props.soundingData} />
      </svg>

      <svg
        id="skewTWindStaff"
        x={skewTWindStaffArea.x}
        y={skewTWindStaffArea.y}
        width={skewTWindStaffArea.width}
        height={skewTWindStaffArea.height}
      >
        <WindStaff soundingData={props.soundingData} />
      </svg>
    </Fragment>
  )
}