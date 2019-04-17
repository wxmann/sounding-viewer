import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTParams,
  skewTLabels,
} from '../config/skewT-config';
import { upperPadding, skewTLabelPadding } from '../config/container';

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
          let y = coords.y + upperPadding,
              x = coords.x + skewTLabelPadding.width;

          if (x >= skewTLabelPadding.width) {
            return (
              <text
                x={x}
                y={y}
              >{T}</text>
            )
          } 
          else {
            return null;
          }
        })
      }
    </g>
  )
};