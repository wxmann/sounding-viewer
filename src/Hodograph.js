import React from 'react';
import {
  hodographArea
} from './config/container'
import HodographOutline from './plotting/HodographOutline';
import HodographWindTrace from './plotting/HodographWindTrace';

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
      <HodographWindTrace soundingData={soundingData} />
    </svg>
  )
}