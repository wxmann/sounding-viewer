import React from 'react';
import {
  hodographArea
} from './config/container'
import HodographOutline from './plotting/HodographOutline';
import HodographTrace from './plotting/HodographTrace';

export default function Hodograph(props) {
  let {
    soundingData
  } = props;

  return (
    <svg
      id="hodograph"
      x={hodographArea.x}
      y={hodographArea.y}
      width={hodographArea.width}
      height={hodographArea.height}
    >
      <HodographOutline />
      <HodographTrace soundingData={soundingData} />
    </svg>
  )
}