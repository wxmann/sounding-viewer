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
    <g id="pressureLevels">
      {skewTParams.isobars.map(p => {
        const leftCoord = toSkewTCoord(p, skewTParams.tMin);
        const rightCoord = toSkewTCoord(p, skewTParams.tMax);

        const attrs = getPathAttrs([leftCoord, rightCoord]);
        attrs.stroke = 'black';
        return React.createElement('polyline', attrs);
      })}
    </g>
  )
};