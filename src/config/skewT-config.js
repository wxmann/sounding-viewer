import RangeInclusive from '../utils/range';

const pSeq = RangeInclusive(100, 1050, 50);
const tSeq = RangeInclusive(-110, 50, 10);
const thetaSeq = RangeInclusive(-30, 160, 10);
const thetaWSeq = RangeInclusive(-20, 40, 5);

const skewTParams = {
    // pressure
    isobars: pSeq.values,
    pMin: pSeq.start,
    pMax: pSeq.stop,

    // temperature
    isotherms: tSeq.values,
    tMin: tSeq.start,
    tMax: tSeq.stop,
    skew: 0.9,

    // mixing ratios
    mixingRatios: [0.4, 1, 2, 4, 7, 10, 16, 24, 32, 40],

    // adiabats
    dryAdiabats: thetaSeq.values,
    thetaMin: thetaSeq.start,
    thetaMax: thetaSeq.stop,

    // moist adiabats
    moistAdiabats: thetaWSeq.values,
    thetaWMin: thetaSeq.start,
    thetaWMax: thetaSeq.stop,
};

const skewTLabels = {
    pressures: RangeInclusive(100, 1000, 100).values,
    temperatures: RangeInclusive(-40, 40, 10).values,
    padding: 10
};

export { skewTParams, skewTLabels };