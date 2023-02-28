import { Box, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import TaskDateField from './TaskDateField';
import TaskDescriptionField from './TaskDescriptionField';
import TaskSelectField from './TaskSelectField';
import TaskTitleField from './TaskTitleField';

const TaskForm: FC = (): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack spacing={2} width="100%">
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
        <Stack direction="row" spacing={2} width="100%">
          <TaskSelectField
            label="Status"
            name="status"
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            items={[
              {
                value: Priority.low,
                label: Priority.low.toUpperCase(),
              },
              {
                value: Priority.normal,
                label: Priority.normal.toUpperCase(),
              },
              {
                value: Priority.high,
                label: Priority.high.toUpperCase(),
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default TaskForm;
