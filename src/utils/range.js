export default function rangeInclusive(start, stop, step = 1) {
    let arr = [];
    for (let val = start; val <= stop; val += step) {
        arr.push(val);
    }

    return {
        start: start,
        stop: stop,
        values: arr
    }
};