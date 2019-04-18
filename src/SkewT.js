import React, { Fragment } from 'react';

import { 
  skewTArea,
  skewTLabelArea,
  skewTWindStaffArea
} from './config/container';
import SkewTOutline from './plotting/SkewTOutline';
import SkewTTempTrace from './plotting/SkewTTempTrace';
import IsothermLabels from './plotting/IsothermLabels';
import PressureLevelLabels from './plotting/PressureLevelLabels';
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
        <SkewTTempTrace soundingData={props.soundingData} />
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