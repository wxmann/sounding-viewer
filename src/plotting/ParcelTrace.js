import React from 'react';
import { getPathStr, extract_pT_Field } from '../utils/plot-helpers'

export default function ParcelTrace(props) {
  const parcelTraceStyle = {
    strokeWidth: 2.0,
    opacity: 1.0,
    fill: 'none'
  }

  let {
    parcelTrace
  } = props;
  
  return (
    <path 
      id="parcelTracePatb"
      d={
        getPathStr(
          extract_pT_Field(parcelTrace, 'temperature')
        )
      }
      stroke="blue"
      style={parcelTraceStyle}
    />
  )
}