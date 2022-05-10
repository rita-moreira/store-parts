import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { paperTitleStyle, titleTextStyle } from '../styles/styles';

const PartsTitles = () => (
  <Paper sx={paperTitleStyle} elevation={0}>
    <Grid container>
      <Grid item xs={4}>
        <Typography sx={titleTextStyle}>
          name
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={titleTextStyle}>
          price
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography sx={titleTextStyle}>
          type
        </Typography>
      </Grid>
    </Grid>
  </Paper>
);

export default PartsTitles;
