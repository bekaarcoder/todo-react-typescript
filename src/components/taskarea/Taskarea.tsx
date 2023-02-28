import { Grid, Box } from '@mui/material';
import { format } from 'date-fns';
import React, { FC, ReactElement } from 'react';
import Task from '../task/Task';
import TaskCounter from '../taskCounter/TaskCounter';
import { Status } from '../taskform/enums/Status';

const Taskarea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>Status of your tasks as on {format(new Date(), 'PPPP')}</h2>
      </Box>
      <Grid container display="flex" justifyContent="center">
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <TaskCounter status={Status.todo} count={12} />
          <TaskCounter status={Status.inProgress} count={2} />
          <TaskCounter status={Status.completed} count={5} />
        </Grid>
        <Grid item md={8} xs={10} display="flex" direction="column">
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Taskarea;
