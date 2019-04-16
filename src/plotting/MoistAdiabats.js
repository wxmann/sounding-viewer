import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
  skewTParams
} from '../config/skewT-config';
import {
  getPathAttrs
} from './plot-common';
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
  return (
    <g id="moistAdiabats">
      {skewTParams.moistAdiabats.map(theta => {
        let moistAdiabatCoords = getMoistAdiabat(theta, skewTParams.pMax, skewTParams.pMin, 25);
        let attrs = getPathAttrs(moistAdiabatCoords);
        attrs.stroke = 'green';
        return React.createElement('polyline', attrs);
      })}  
    </g>
  )
};