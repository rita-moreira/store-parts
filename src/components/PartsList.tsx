import React, { useMemo } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { paperStyle, bodyTextStyle } from '../styles/styles';
import { StoreParts } from '../interfaces/store-parts';
import PartsTitles from './PartsTitles';
import Loading from './Loading';

interface Props {
  data: StoreParts[] | null
  isLoading: boolean
}
const PartsList: React.FC<Props> = ({ data, isLoading }) => {
  const renderParts = useMemo(
    () => data?.map((e) => (
      <Link to={`${e.name.replace(/\s/g, '')}`} key={e.name} style={{ textDecoration: 'none' }} data-testid="part" id="part">
        <Paper sx={paperStyle} elevation={0}>
          <Grid container>
            <Grid item xs={4}>
              <Typography sx={bodyTextStyle}>
                {e.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={bodyTextStyle}>
                {e.price}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={bodyTextStyle}>
                {e.type}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Link>
    )),
    [data]
  );

  if (!data || isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <PartsTitles />
      { renderParts }
    </div>
  );
};

export default PartsList;
