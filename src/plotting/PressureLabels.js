import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTLabels,
} from '../config/skewT-config';
import {
  upperPadding,
  skewTLabelPadding
} from '../config/container';

export default function PressureLabels() {
  return (
    <g
      id="pressureLevelLabels"
      transform="translate(-10 0)"
      textAnchor="end"
    >
      {
        skewTLabels.pressures.map(p => {
          let y = toSkewTCoord(p, 0).y + upperPadding,
              x = skewTLabelPadding.x + skewTLabelPadding.width;

          return (
            <text
              x={x}
              y={y}
              alignmentBaseline="middle"
            >{p}</text>
          )
        })
      }
    </g>
  )
};