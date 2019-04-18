import RangeInclusive from '../utils/range';

const vSeq = RangeInclusive(0, 110, 10);
const hodoParams = {
    vRadii: vSeq.values,
    vMax: vSeq.stop
};

export { hodoParams };
