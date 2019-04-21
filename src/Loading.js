import React from 'react';
import { ClipLoader } from 'react-spinners';

export default function Loading() {
  return (
    <ClipLoader
      sizeUnit={"px"}
      size={150}
      color={'blue'}
      loading={true}
    />
  )
}