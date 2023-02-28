import React, { FC, ReactElement } from 'react';
import { Grid } from '@mui/material';
import Profile from '../profile/Profile';
import TaskForm from '../taskform/TaskForm';

const Sidebar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: '100vh',
        width: '100%',
        position: 'fixed',
        top: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'background.paper',
      }}
    >
      <Profile name="Shashank" />
      <TaskForm />
    </Grid>
  );
};

export default Sidebar;
