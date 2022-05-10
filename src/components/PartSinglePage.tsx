import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Grid, Divider, Paper } from '@mui/material';
import { StoreParts } from '../interfaces/store-parts';
import { useFetch } from '../hooks/useFetch';
import Error from './Error';
import { globalPaddingStyle, containerSinglePageStyle, titleTextStyle, bodyTextStyle, singlePagePaperStyle, singlePageContentPaperStyle, displayFlexStyle, contentTitleTextStyle } from '../styles/styles';
import Loading from './Loading';

const PartSinglePage = () => {
  const { data, error } = useFetch<StoreParts[]>('/store/parts');

  const { name } = useParams();
  const nameWithSpace = `${name?.slice(0, name.length - 1)} ${name?.slice(-1)}`;
  const element = data?.find((e) => e.name === nameWithSpace);

  if (error) {
    return <Error />;
  }

  if (!element) {
    return <Loading />;
  }

  return (
    <Container maxWidth="md" sx={containerSinglePageStyle}>
      <Grid container>
        <Grid item xs={12} sx={globalPaddingStyle}>
          <Typography sx={{ color: 'primary.main' }} variant="h4">Store Parts</Typography>
          <Divider sx={{ borderBottomWidth: 2 }} />
        </Grid>

        <Grid item xs={12} sx={globalPaddingStyle}>
          <Paper sx={singlePagePaperStyle}>
            <Typography sx={titleTextStyle}>
              {element.name}
            </Typography>
            <Divider />
            <Paper sx={singlePageContentPaperStyle}>
              <Grid item sx={displayFlexStyle}>
                <Typography sx={contentTitleTextStyle}>
                  price:
                </Typography>
                <Typography sx={bodyTextStyle}>
                  {element.price}
                </Typography>
              </Grid>
              <Grid item sx={displayFlexStyle}>
                <Typography sx={contentTitleTextStyle}>
                  type:
                </Typography>
                <Typography sx={bodyTextStyle}>
                  {element.type}
                </Typography>
              </Grid>
            </Paper>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PartSinglePage;
