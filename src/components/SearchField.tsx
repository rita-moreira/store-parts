import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { searchPaperStyle, iconButtonStyle, inputBaseStyle } from '../styles/styles';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSearchTermChange: (text: string) => void
}
const SearchField: React.FC<Props> = ({ onSearchTermChange }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <Paper
      sx={searchPaperStyle(isHover)}
    >
      <IconButton sx={iconButtonStyle} aria-label="search" disableRipple>
        <SearchIcon sx={{ color: 'primary.light' }} />
      </IconButton>
      <InputBase
        data-testid="search"
        sx={inputBaseStyle}
        placeholder="search..."
        inputProps={{ 'aria-label': 'search parts' }}
        onChange={(e) => onSearchTermChange(e.target.value)}
        onFocus={() => setIsHover(true)}
        onBlur={() => setIsHover(false)}

      />
    </Paper>
  );
};

export default SearchField;
