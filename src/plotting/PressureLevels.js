import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTParams
} from '../config/skewT-config';
import {
  getPathStr
} from '../utils/plot-helpers';

export default function PressureLevels() {
  return (
    <path 
      id="pressureLevels"
      d={
        skewTParams.isobars
          .map(p => {
            const leftCoord = toSkewTCoord(p, skewTParams.tMin);
            const rightCoord = toSkewTCoord(p, skewTParams.tMax);
            return getPathStr([leftCoord, rightCoord]);
          })
      }
      stroke="black"
      fill="none"
    />
  )
};