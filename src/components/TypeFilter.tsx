/* eslint-disable max-len */
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useFetch } from '../hooks/useFetch';
import { formControlStyle, menuItemStyle } from '../styles/styles';

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSelectedTypeChange: (text: string) => void
}
const TypeFilter: React.FC<Props> = ({ onSelectedTypeChange }) => {
  const { data } = useFetch<string[]>('/store/part-types');

  const [type, setType] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
    onSelectedTypeChange(event.target.value);
  };
  return (
    <FormControl sx={formControlStyle}>
      <InputLabel id="select-helper-label">Type</InputLabel>
      <Select
        data-testid="select"
        labelId="type-select-helper-label"
        id="type-select-helper"
        value={type}
        label="Type"
        onChange={handleChange}
      >
        <MenuItem data-testid="None" value="" sx={menuItemStyle}>
          <em>None</em>
        </MenuItem>
        {data?.map((e) => <MenuItem data-testid={e} key={e} value={e} sx={menuItemStyle}>{e}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default TypeFilter;
