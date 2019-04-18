import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTParams
} from '../config/skewT-config';
import {
  getPathStr
} from '../utils/plot-helpers';
import {
  tempAtMixingRatio
} from '../utils/calcs'

export default function MixingRatios() {
  const style = {
    fill: 'none',
    stroke: 'pink',
    strokeWidth: 1
  };
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
  
          return getPathStr([bottomCoord, topCoord]);
        })
      }
      style={style}
    />
  )
};