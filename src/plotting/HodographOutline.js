import React, { Fragment } from 'react';

import {
  hodoParams
} from '../config/hodo-config';
import {
  hodographArea
} from '../config/container';
import {
  getPathStr
} from '../utils/plot-helpers'

const cx = hodographArea.width / 2;
const cy = hodographArea.height / 2;
const rMax = Math.sqrt(cx ** 2 + cy ** 2);

export default function HodographOutline() {
  return (
    <Fragment>
      <rect
        x={0} 
        y={0}
        height={hodographArea.height}
        width={hodographArea.width}
        stroke="black"
        strokeWidth="3px"
        fill="none"
      />

      <g 
        id="hodographOutline" 
        transform={`translate(${cx} ${cy})`}
      >
        <g id="hodographRadii">
          {
            hodoParams.vRadii.map(v => {
              let r = rMax * v / hodoParams.vMax;
              return (
                <circle
                  cx="0"
                  cy="0"
                  r={r}
                  fill="none"
                  stroke="gray"
                />
              )
            })
          }
        </g>

        <g id="hodographAxes">
          <path 
            id="hodoYAxis"
            d={getPathStr([{x:0, y:cy}, {x:0, y:-cy}])} 
            stroke="gray"/>

          <path 
            id="hodoXAxis"
            d={getPathStr([{x:-cx, y:0}, {x:cx, y:0}])} 
            stroke="gray"/>
        </g>
      </g>
    </Fragment>
  )
}