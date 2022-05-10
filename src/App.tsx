/* eslint-disable max-len */
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Container, Grid, Typography, Divider, Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { orderBy } from 'lodash';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useFetch } from './hooks/useFetch';
import SearchField from './components/SearchField';
import PartsList from './components/PartsList';
import TypeFilter from './components/TypeFilter';
import { StoreParts } from './interfaces/store-parts';
import { buttonStyle, containerStyle, globalPaddingStyle, filterComponents, titleTextStyle, filterComponentsSmall } from './styles/styles';
import Error from './components/Error';

const App = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const [searchText, setSearchText] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [buttonState, setButtonState] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { data, mutate, error } = useFetch<StoreParts[]>('/store/parts', selectedType ?? null);

  const buttonToDisplay = buttonState === 0 ? null : buttonState === 1 ? <ArrowDropDownIcon data-testid="arrow-down" id="arrow-down" sx={{ color: 'white' }} /> : buttonState === 2 ? <ArrowDropUpIcon data-testid="arrow-up" id="arrow-up" sx={{ color: 'white' }} /> : null;

  const filterData: StoreParts[] | undefined = useMemo(() => data?.filter((e) => (e.name.toLowerCase()).includes(searchText.toLowerCase())), [data, searchText]);
  const orderData = filterData ? buttonState === 0 ? filterData : orderBy(filterData, [(e) => Number(e.price.slice(0, -1))], [buttonState === 1 ? 'desc' : 'asc']) : null;

  const onSearchTermChange = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const onSelectedTypeChange = useCallback((type: string) => {
    setSelectedType(type);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const updateData = async () => {
      await mutate();
      setIsLoading(false);
    };
    updateData();
  }, [data, mutate, selectedType]);

  if (error) {
    return <Error />;
  }

  return (
    <Container maxWidth="md" sx={containerStyle}>
      <Grid container sx={{ flexGrow: 1 }}>
        <Grid item xs={12} sx={globalPaddingStyle}>
          <Typography sx={{ color: 'primary.main' }} variant="h4">Store Parts</Typography>
          <Divider sx={{ borderBottomWidth: 2 }} />
        </Grid>
        <Grid item xs={12} sx={filterComponents}>
          {matches ? (
            <>
              <SearchField onSearchTermChange={onSearchTermChange} />
              <TypeFilter onSelectedTypeChange={onSelectedTypeChange} />
              <div style={{ flexGrow: 1 }} />
              <Button
                id="button-reOrder"
                disableRipple
                sx={buttonStyle}
                onClick={() => setButtonState(buttonState + 1 > 2 ? 1 : buttonState + 1)}
                variant="contained"
                endIcon={buttonToDisplay}
                size="small"
              >
                <Typography sx={titleTextStyle}>
                  Price Order
                </Typography>
              </Button>
            </>
          )
            : (
              <>
                <SearchField onSearchTermChange={onSearchTermChange} />
                <Grid item xs={12} sx={filterComponentsSmall}>
                  <TypeFilter onSelectedTypeChange={onSelectedTypeChange} />
                  <div style={{ flexGrow: 1 }} />
                  <Button
                    id="button-reOrder"
                    data-testid="button-reOrder"
                    disableRipple
                    sx={buttonStyle}
                    onClick={() => setButtonState(buttonState + 1 > 2 ? 1 : buttonState + 1)}
                    variant="contained"
                    endIcon={buttonToDisplay}
                    size="small"
                  >
                    <Typography sx={titleTextStyle}>
                      Price Order
                    </Typography>
                  </Button>
                </Grid>
              </>
            )}
        </Grid>
        <Grid item xs={12} sx={globalPaddingStyle}>
          <PartsList data={orderData} isLoading={isLoading} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
