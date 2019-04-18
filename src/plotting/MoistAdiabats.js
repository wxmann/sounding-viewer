import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTParams
} from '../config/skewT-config';
import {
  getPathStr
} from '../utils/plot-helpers';
import {
  tempAtMoistAdiabat
} from '../utils/calcs'

function getMoistAdiabat(thetaW, hiP, lowP, dp) {
  var coords = [];
  for (var p = hiP; p >= lowP; p -= dp) {
      var T = tempAtMoistAdiabat(p, thetaW);
      coords.push(toSkewTCoord(p, T));
  }
  return coords;
}

export default function MoistAdiabats() {
  const style = {
    fill: 'none',
    stroke: 'green',
    opacity: 0.5,
    strokeWidth: 1,
  };
  return (
    <path 
      id="moistAdiabats"
      d={
        skewTParams.moistAdiabats.map(theta => {
          let moistAdiabatCoords = getMoistAdiabat(theta, skewTParams.pMax, skewTParams.pMin, 25);
          return getPathStr(moistAdiabatCoords);
        })
      }
      style={style}
    />
  )
};