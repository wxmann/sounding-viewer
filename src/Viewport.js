import React from 'react';

import SkewT from './SkewT';
import Hodograph from './Hodograph';
import {
  containerHeight,
  containerWidth
} from './config/container';

function Viewport() {
  return (
    <svg
      id="viewport" 
      width={containerWidth}
      height={containerHeight}
      align="center"
    >
      <SkewT />
      <Hodograph />
    </svg>
  )
}

export default Viewport;
