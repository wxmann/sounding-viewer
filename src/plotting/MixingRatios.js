import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTParams
} from '../config/skewT-config';
import {
  getPathAttrs
} from './plot-common';
import {
  tempAtMixingRatio
} from '../utils/calcs'

export default function MixingRatios() {
  return (
    <path 
      id="mixingRatios"
      d={
        skewTParams.mixingRatios.map(mixingRatio => {
          const bottomP = skewTParams.pMin;
          const bottomT = tempAtMixingRatio(bottomP, mixingRatio);
          const bottomCoord = toSkewTCoord(bottomP, bottomT);
  
          const topP = skewTParams.pMax;
          const topT = tempAtMixingRatio(topP, mixingRatio);
          const topCoord = toSkewTCoord(topP, topT);
  
          return getPathAttrs([bottomCoord, topCoord]);
        })
      }
      stroke="gray"
      alpha="0.9"
      fill="none"
    />
  )
};