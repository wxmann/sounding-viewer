import React from 'react';
import { CircularProgress } from '@material-ui/core';

export default function LoadingIndicator() {
  return (
    <CircularProgress
      variant="indeterminate"
    />
  )
}