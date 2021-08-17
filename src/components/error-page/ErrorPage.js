import React from 'react';
import { Typography } from '@material-ui/core';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <Typography variant='h4' align='center'>
        Oops! This page does not exists
        <br />
        <a href='/'>Go Home</a>
      </Typography>
    </div>
  );
};

export default ErrorPage;
