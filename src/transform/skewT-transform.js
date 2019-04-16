import { skewTParams } from '../config/skewT-config';
import { skewTArea } from '../config/container';

function pT_Transform(p, T) {
    const pMin = skewTParams.pMin;
    const pMax = skewTParams.pMax;
    const tMin = skewTParams.tMin;
    const tMax = skewTParams.tMax;
    const m = skewTParams.skew;
    const invAspectRatio = skewTArea.height / skewTArea.width;

    const relY = Math.log(p / pMin) / Math.log(pMax / pMin);
    const relX = ((T - tMin) / (tMax - tMin)) * (1 + invAspectRatio) - invAspectRatio + invAspectRatio * (1 - relY) / m;
    return {
        relX: relX,
        relY: relY
    }
}

export default function toSkewTCoord(p, T) {
    const relCoordinates = pT_Transform(p, T);
    return {
        x: relCoordinates.relX * skewTArea.width,
        y: relCoordinates.relY * skewTArea.height
    }
};