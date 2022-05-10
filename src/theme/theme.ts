import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#4F5869',
      light: '#3E60C7',
    },
    secondary: {
      main: '#999CA7',
    },
    background: {
      paper: '#FFFFFF',
      default: '#EDF0FA',
    },
  },
});

export default theme;
