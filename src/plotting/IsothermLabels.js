import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTParams,
  skewTLabels
} from '../config/skewT-config';

export default function IsothermLabels() {
  return (
    <g
      id="isothermLabels"
      transform="translate(0 20)"
      textAnchor="middle"
    >
      {
        skewTLabels.temperatures.map(function (T) {
          let maxP = skewTParams.pMax;
          let coords = toSkewTCoord(maxP, T);
          let y = coords.y,
              x = coords.x;

          return React.createElement('text', {
            'x': x.toString(),
            'y': y.toString(),
          }, T);
        })
      }
    </g>
  )
};