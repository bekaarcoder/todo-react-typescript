import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import Taskarea from '../../components/taskarea/Taskarea';
import Sidebar from '../../components/sidebar/Sidebar';

const Dashboard: FC = (): ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <Taskarea />
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
