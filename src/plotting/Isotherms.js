import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTParams
} from '../config/skewT-config';
import {
  getPathStr
} from '../utils/plot-helpers';

export default function Isotherms() {
  return (
    <path 
      id="isotherms"
      d={
        skewTParams.isotherms
          .map(T => {
            const topCoord = toSkewTCoord(skewTParams.pMin, T);
            const bottomCoord = toSkewTCoord(skewTParams.pMax, T);
            return getPathStr([topCoord, bottomCoord]);
          })
      }
      stroke='black'
      fill='none'
    />
  )
};