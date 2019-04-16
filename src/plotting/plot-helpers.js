function getPathStr(coords) {
    let firstCoord = coords.shift();
    let moveToStr = `M${[firstCoord.x, firstCoord.y].join(' ')}`
    let linesStr = coords.map(coord => {
        return `L${[coord.x, coord.y].join(' ')}`;
    }).join(' ');

    return `${moveToStr} ${linesStr}`;
}

export {
    getPathStr
}