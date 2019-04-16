import { hodographArea } from '../config/container';

function v_Transform(v, dir) {
    const rRel = v / hodoConfig.vMax;
    // convert cardinal direction to radians
    const theta = (dir + 90) * (Math.PI / 180);
    return {
        relX: rRel * Math.cos(theta),
        relY: rRel * Math.sin(theta)
    }
}

export default function toHodographCoord(v, dir) {
    const relCoordinates = v_Transform(v, dir);
    const w = hodographArea.width / 2;
    const h = hodographArea.height / 2;
    const r = Math.sqrt(w**2 + h**2);
    return {
        x: relCoordinates.relX * r,
        y: relCoordinates.relY * r
    }
}