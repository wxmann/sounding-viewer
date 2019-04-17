import React from 'react';

import Isotherms from './Isotherms';
import PressureLevels from './PressureLevels';
import MixingRatios from './MixingRatios';
import DryAdiabats from './DryAdiabats';
import MoistAdiabats from './MoistAdiabats';

export default function SkewTOutline() {
  return (
    <g id="skewTOutline">
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
      <DryAdiabats />
      <MoistAdiabats />
    </g>
  )
}