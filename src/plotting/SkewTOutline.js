import React, { Fragment } from 'react';

import Isotherms from './Isotherms';
import PressureLevels from './PressureLevels';
import MixingRatios from './MixingRatios';
import DryAdiabats from './DryAdiabats';
import MoistAdiabats from './MoistAdiabats';

export default function SkewTOutline() {
  return (
    <Fragment>
      <Isotherms />
      <PressureLevels />
      <MixingRatios />
      <DryAdiabats />
      <MoistAdiabats />
    </Fragment>
  )
}