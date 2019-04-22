import React from 'react';
import windBarbConfig from '../config/windbarb-config';

export default function WindBarb(props) {
  let {
    windspd,
    winddir,
    coord
  } = props;

  function getBarbAttrs() {
    let parts = [];
    parts.push(["M", coord.x, coord.y].join(" "));

    let {
      barbLength,
      longBarbHeight,
      shortBarbHeight,
      flagWidth,
      barbSpacing
    } = windBarbConfig;

    // draw barb to point north initially
    let barbEndCoord = {x: coord.x, y: coord.y - barbLength};
    parts.push(["L", barbEndCoord.x, barbEndCoord.y].join(" "));
    let currentPosition = barbEndCoord;
    let fillStyle = {fill: 'none'}   // related to filling in the flags. Don't fill initially
    let left = windspd;
    let gt5ktDrawn = false;

    // draw the 50kt barbs, if applicable
    while (left >= 50) {
      let triApex = {x: barbEndCoord.x + longBarbHeight, y: barbEndCoord.y + (flagWidth / 2)};
      let triEnd = {x: barbEndCoord.x, y: barbEndCoord.y + flagWidth};
      parts.push(["L", triApex.x, triApex.y].join(" "));
      parts.push(["L", triEnd.x, triEnd.y].join(" "));
      currentPosition.y += (barbSpacing + flagWidth);
      parts.push(["M", currentPosition.x, currentPosition.y].join(" "));

      // do fill in flags if they exist.
      fillStyle = {fill: 'black'};
      left -= 50;
      gt5ktDrawn = true;
    }

    // draw the 10kt barbs, if applicable
    while (left >= 10) {
      let barbApex = {x: currentPosition.x + longBarbHeight, y: currentPosition.y};
      parts.push(["L", barbApex.x, barbApex.y].join(" "));
      currentPosition.y += barbSpacing;
      parts.push(["M", currentPosition.x, currentPosition.y].join(" "));
      left -= 10;
      gt5ktDrawn = true;
    }

    // draw the 5kt barbs, if applicable
    if (left >= 5) {
      let barbApex = {x: currentPosition.x + shortBarbHeight, y: currentPosition.y};
      if (!gt5ktDrawn) {
        barbApex.y += barbSpacing;
        parts.push(["M", currentPosition.x, barbApex.y].join(" "));
      }
      parts.push(["L", barbApex.x, barbApex.y].join(" "));
    }
    // hack to fix some browsers (Chrome 73?) rendering 90 degree SVG rotations in a weird manner
    let rotation = winddir % 90 == 0 ? winddir + 0.01 : winddir

    return {
      d: parts.join(" "),
      // this incorporates wind dir and rotation
      transform: `rotate(${[rotation, coord.x, coord.y].join(" ")})`,
      style: {
        stroke: 'black',
        opacity: 1,
        strokeWidth: 1,
        ...fillStyle
      }
    }
  }

  return (
    <g>
      <circle 
        cx={coord.x}
        cy={coord.y}
        fill="black"
        r="2"
      />
      {
        windspd < 5 ? null:
          React.createElement('path', {
            className: 'windBarb',
            ...getBarbAttrs()
          })
      }
    </g>
  );
}