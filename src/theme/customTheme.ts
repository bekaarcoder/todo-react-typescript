import { createTheme, Theme } from '@mui/material/styles';

export const customTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#151515',
      default: '#121212',
    },
  },
});
