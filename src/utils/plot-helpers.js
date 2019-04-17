import toSkewTCoord from '../transform/skewT-transform';

function getPathStr(coords) {
  let firstCoord = coords.shift();
  let moveToStr = `M${[firstCoord.x, firstCoord.y].join(' ')}`
  let linesStr = coords.map(coord => {
    return `L${[coord.x, coord.y].join(' ')}`;
  }).join(' ');

  return `${moveToStr} ${linesStr}`;
}

function extract_pT_Field(profile, field) {
  return profile
    .filter(ob => {
      return ob !== null && ob[field] !== null && ob.pressure !== null;
    })
    .map(ob => {
      let p = ob.pressure;
      let T = ob[field]
      return toSkewTCoord(p, T);
    });
}

export {
  getPathStr,
  extract_pT_Field
}