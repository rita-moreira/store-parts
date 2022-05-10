import React from 'react';
import { Paper, Typography, Container } from '@mui/material';
import { paperStyle, containerStyle } from '../styles/styles';

const Error = () => (
  <Container maxWidth="lg" sx={containerStyle}>
    <Paper sx={paperStyle}>
      <Typography color="error">
        Oops! An Error Occur
      </Typography>
    </Paper>
  </Container>
);

export default Error;
