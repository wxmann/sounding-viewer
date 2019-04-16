import React from 'react';
import toSkewTCoord from '../transform/skewT-transform';
import {
    skewTParams
} from '../config/skewT-config';
import {
    getPathAttrs
} from './plot-common';

function createIsothermLines() {
    // debugger;
    skewTParams.isotherms.forEach(function(T) {
        const topCoord = toSkewTCoord(skewTParams.pMin, T);
        const bottomCoord = toSkewTCoord(skewTParams.pMax, T);
        const attrs = getPathAttrs([topCoord, bottomCoord]);
        attrs.stroke = 'black';
        React.createElement('polyline', attrs);
    });
};

export default function Isotherms() {
    return (
        <g id="isotherms">
            {skewTParams.isotherms.map(T => {
                const topCoord = toSkewTCoord(skewTParams.pMin, T);
                const bottomCoord = toSkewTCoord(skewTParams.pMax, T);

                const attrs = getPathAttrs([topCoord, bottomCoord]);
                attrs.stroke = 'black';
                return React.createElement('polyline', attrs);
            })}
        </g>
    )
};