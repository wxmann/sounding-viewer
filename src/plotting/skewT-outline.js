import React from 'react';
import {
    createBoundaryRect,
    createGroupElement,
    getPath
} from './plot-common';
import toSkewTCoord from '../transform/skewT-transform';
// import Elements from './element-consts';
import {
    skewTParams
} from '../config/skewT-config';
import {
    skewTArea
} from '../config/container';
import {
    tempAtMixingRatio,
    tempAtDryAdiabat
} from '../utils/calcs';


// const plotSkewTBoundary = function(skewT) {
//     const rect = createBoundaryRect(Elements.SKEW_T_BOUNDARY, skewTArea.height, skewTArea.width);
//     skewT.appendChild(rect);
// };

const isotherms = function() {
    // const g = createGroupElement('isotherms');
    // // skewT.appendChild(g);

    // skewTParams.isotherms.forEach(function(T) {
    //     const topCoord = toSkewTCoord(skewTParams.pMin, T);
    //     const bottomCoord = toSkewTCoord(skewTParams.pMax, T);
    //     const path = getPath([topCoord, bottomCoord]);
    //     g.appendChild(path);
    // });

    <g id="isotherms">
        {skewTParams.isotherms.forEach(function(T) {
            const topCoord = toSkewTCoord(skewTParams.pMin, T);
            const bottomCoord = toSkewTCoord(skewTParams.pMax, T);
            getPath([topCoord, bottomCoord]);
        })}
    </g>
};

// const pressureLevels = function () {
//     const g = createGroupElement('isobars');
//     // skewT.appendChild(g);

//     skewTParams.isobars.forEach(function(p) {
//         const leftCoord = toSkewTCoord(p, skewTParams.tMin);
//         const rightCoord = toSkewTCoord(p, skewTParams.tMax);
//         const path = getPath([leftCoord, rightCoord]);
//         g.appendChild(path);
//     });
// };

// const mixingRatios = function (skewT) {
//     const g = createGroupElement(Elements.MIXING_RATIOS);
//     skewT.appendChild(g);

//     skewTParams.mixingRatios.forEach(function(mixingRatio) {
//         const bottomP = skewTParams.pMin;
//         const bottomT = tempAtMixingRatio(bottomP, mixingRatio);
//         const bottomCoord = toSkewTCoord(bottomP, bottomT);

//         const topP = skewTParams.pMax;
//         const topT = tempAtMixingRatio(topP, mixingRatio);
//         const topCoord = toSkewTCoord(topP, topT);

//         const path = getPath([bottomCoord, topCoord]);
//         g.appendChild(path);
//     });
// };

// const dryAdiabats = function (skewT) {
//     const g = createGroupElement(Elements.DRY_ADIABATS);
//     skewT.appendChild(g);

//     skewTParams.dryAdiabats.forEach(function (theta) {
//         const dryAdiabat = getDryAdiabat(theta, skewTParams.pMax, skewTParams.pMin, 25);
//         g.appendChild(dryAdiabat);
//     });
// };

// function getDryAdiabat(theta, hiP, lowP, dp) {
//     const coords = [];
//     for (const p = hiP; p >= lowP; p -= dp) {
//         const T = tempAtDryAdiabat(p, theta);
//         coords.push(transform.toSkewTCoord(p, T));
//     }
//     return getPath(coords);
// }

export {
    isotherms,
    // pressureLevels,
    // mixingRatios,
    // dryAdiabats
};