import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTParams,
  skewTLabels,
} from '../config/skewT-config';
import {
  upperPadding,
  skewTLabelPadding
} from '../config/container';

export default function PressureLevelLabels() {
  return (
    <g
      id="pressureLevelLabels"
      transform="translate(-10 0)"
      textAnchor="end"
    >
      {
        skewTLabels.pressures.map(p => {
          let y = toSkewTCoord(p, 0).y + upperPadding,
              x = skewTLabelPadding.x + skewTLabelPadding.width

          return React.createElement('text', {
            'x': x.toString(),
            'y': y.toString(),
            'alignment-baseline': 'middle'
          }, p);
        })
      }
    </g>
  )
};