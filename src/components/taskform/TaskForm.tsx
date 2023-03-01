import {
  Box,
  Stack,
  Typography,
  LinearProgress,
  Alert,
  AlertTitle,
  Button,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import React, {
  FC,
  ReactElement,
  useState,
  useEffect,
  useContext,
} from 'react';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../taskarea/interfaces/ICreateTask';
import { Priority } from './enums/Priority';
import { Status } from './enums/Status';
import TaskDateField from './TaskDateField';
import TaskDescriptionField from './TaskDescriptionField';
import TaskSelectField from './TaskSelectField';
import TaskTitleField from './TaskTitleField';
import { TaskUpdateContext } from '../../context';

const TaskForm: FC = (): ReactElement => {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<Date | null>(new Date());
  const [status, setStatus] = useState<string>(Status.todo);
  const [priority, setPriority] = useState<string>(Priority.normal);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const tasksUpdatedContext = useContext(TaskUpdateContext);

  const createTaskMutation = useMutation({
    mutationFn: (data: ICreateTask) =>
      sendApiRequest('http://localhost:3200/tasks', 'POST', data),
  });

  function createTaskHandler() {
    if (!title || !date || !description) return;

    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };

    createTaskMutation.mutate(task);
  }

  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
      tasksUpdatedContext.toggle();
    }

    const successTimout = setTimeout(() => {
      setShowSuccess(false);
    }, 7000);

    return () => {
      clearTimeout(successTimout);
    };
  }, [createTaskMutation.isSuccess]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccess && (
        <Alert severity="success" sx={{ width: '100%', marginBottom: '16px' }}>
          <AlertTitle>Success</AlertTitle>
          The task has been created successfully
        </Alert>
      )}
      <Typography mb={2} component="h2" variant="h6">
        Create A Task
      </Typography>
      <Stack spacing={2} width="100%">
        <TaskTitleField onChange={(e) => setTitle(e.target.value)} />
        <TaskDescriptionField
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField value={date} onChange={(date) => setDate(date)} />
        <Stack direction="row" spacing={2} width="100%">
          <TaskSelectField
            label="Status"
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as string)}
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
            value={priority}
            onChange={(e) => setPriority(e.target.value as string)}
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
        {createTaskMutation.isLoading && <LinearProgress />}
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={createTaskHandler}
          disabled={
            !title ||
            !date ||
            !description ||
            !status ||
            !priority ||
            createTaskMutation.isLoading
          }
        >
          Create A Task
        </Button>
      </Stack>
    </Box>
  );
};

export default TaskForm;
