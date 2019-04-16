import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTParams
} from '../config/skewT-config';
import {
  getPathAttrs
} from './plot-common';

export default function PressureLevels() {
  return (
    <path 
      id="pressureLevels"
      d={
        skewTParams.isobars
          .map(p => {
            const leftCoord = toSkewTCoord(p, skewTParams.tMin);
            const rightCoord = toSkewTCoord(p, skewTParams.tMax);
            return getPathAttrs([leftCoord, rightCoord]);
          })
      }
      stroke="black"
      fill="none"
    />
  )
};