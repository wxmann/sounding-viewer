import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTParams
} from '../config/skewT-config';
import {
  getPathStr
} from '../utils/plot-helpers';
import {
  tempAtDryAdiabat
} from '../utils/calcs'

function getDryAdiabat(theta, hiP, lowP, dp) {
    const coords = [];
    for (let p = hiP; p >= lowP; p -= dp) {
        let T = tempAtDryAdiabat(p, theta);
        coords.push(toSkewTCoord(p, T));
    }
    return coords;
}

export default function DryAdiabats() {
  const style = {
    fill: 'none',
    stroke: 'orange',
    opacity: 0.8,
    strokeWidth: 1
  }
  return (
    <path 
      id="dryAdiabats"
      d={
        skewTParams.dryAdiabats.map(theta => {
          let dryAdiabatCoords = getDryAdiabat(theta, skewTParams.pMax, skewTParams.pMin, 25);
          return getPathStr(dryAdiabatCoords);
        })
      }
      style={style}
    />
  )
};