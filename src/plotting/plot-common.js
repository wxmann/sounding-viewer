function getPathAttrs(coords) {
    const allpoints = [];
    coords.forEach(function(coord) {
        allpoints.push([coord.x, coord.y].join(' '));
    });
    return {
        'points': allpoints.join(', '),
        'fill': 'none'
    };
}

export {
    getPathAttrs
}