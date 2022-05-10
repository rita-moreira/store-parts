import React from 'react';
import { Skeleton } from '@mui/material';
import { skeletonStyle } from '../styles/styles';

const Loading = () => (
  <>
    <Skeleton animation="wave" id="skeleton" sx={skeletonStyle} />
    <Skeleton animation="wave" sx={skeletonStyle} />
    <Skeleton animation="wave" sx={skeletonStyle} />
    <Skeleton animation="wave" sx={skeletonStyle} />
    <Skeleton animation="wave" sx={skeletonStyle} />
  </>

);

export default Loading;
