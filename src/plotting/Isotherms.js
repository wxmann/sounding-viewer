import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTParams
} from '../config/skewT-config';
import {
  getPathAttrs
} from './plot-common';

export default function Isotherms() {
  return (
    <path 
      id="isotherms"
      d={
        skewTParams.isotherms
          .map(T => {
            const topCoord = toSkewTCoord(skewTParams.pMin, T);
            const bottomCoord = toSkewTCoord(skewTParams.pMax, T);
            return getPathAttrs([topCoord, bottomCoord]);
          })
      }
      stroke='black'
      fill='none'
    />
  )
};