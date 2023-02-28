import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React, { FC, ReactElement } from 'react';
import { customTheme } from './theme/customTheme';
import Dashboard from './pages/dashboard/Dashboard';

const App: FC = (): ReactElement => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
