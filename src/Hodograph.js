import React from 'react';
import {
  hodographArea
} from './config/container'
import HodographOutline from './plotting/HodographOutline';

export default function Hodograph() {
  return (
    <svg
      id="hodograph"
      x={hodographArea.x}
      y={hodographArea.y}
      width={hodographArea.width}
      height={hodographArea.height}
    >
      <HodographOutline />
    </svg>
  )
}