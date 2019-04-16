import React from 'react';
import Elements from './element-consts';

const SVG_NS = 'http://www.w3.org/2000/svg';

const createBoundaryRect = function(id, hgt, width) {
    const rect = createElement('rect');
    rect.id = id;
    rect.setAttribute('class', Elements.classes.BOUNDARY);
    rect.setAttribute('height', hgt.toString());
    rect.setAttribute('width', width.toString());
    return rect;
};

const createElement = function(elementName, attrs) {
    return React.createElement(elementName, attrs);
}

const createGroupElement = function(id) {
    const groupElem = createElement('g', {'id': id});
    return groupElem;
};

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

const getPath = function(coords) {
    const allpoints = [];
    coords.forEach(function(coord) {
        allpoints.push([coord.x, coord.y].toString());
    });
    // line.setAttribute('points', allpoints.join(" "));
    // line.style.fill = 'none';
    const line = createElement('polyline', {
        'points': allpoints.join(" "),
        'fill': 'none'
    });
    return line;
};

const translate = function(elem, dx, dy) {
    elem.setAttribute('transform', 'translate(' + [dx, dy].toString() + ')');
};

const getTraceElement = function(profile, id, getCoordAtP, addPoints) {
    const g = createGroupElement(id);
    if (!profile.isEmpty()) {
        g.setAttribute('class', Elements.classes.TRACE);
        const coords = [];
        profile.pressures.forEach(function (pres) {
            const coord = getCoordAtP(pres);
            coords.push(coord);
            if (addPoints) {
                const circ = createElement('circle');
                circ.setAttribute('cx', coord.x.toString());
                circ.setAttribute('cy', coord.y.toString());
                circ.setAttribute('r', '2');
                circ.style.opacity = '0';
                g.appendChild(circ);
            }
        });
        const path = getPath(coords);
        g.appendChild(path);
    }
    return g;
};

const setDimensions = function(canvas, dim) {
    canvas.setAttribute('x', dim.x.toString());
    canvas.setAttribute('y', dim.y.toString());
    // TODO: set viewport area instead of width/height explicitly
    canvas.setAttribute('width', dim.width.toString());
    canvas.setAttribute('height', dim.height.toString());
};

export {
    SVG_NS,
    createBoundaryRect,
    createGroupElement,
    getPath,
    translate,
    getTraceElement,
    setDimensions,
    getPathAttrs
}