import { Grid, Box, Alert, LinearProgress } from '@mui/material';
import { format } from 'date-fns';
import React, { FC, ReactElement, useContext, useEffect } from 'react';
import Task from '../task/Task';
import TaskCounter from '../taskCounter/TaskCounter';
import { Status } from '../taskform/enums/Status';
import { useQuery, useMutation } from '@tanstack/react-query';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ITaskApi } from './interfaces/ITaskApi';
import { IUpdateTask } from '../taskform/interfaces/IUpdateTask';
import { countTasks } from './helpers/countTasks';
import { TaskUpdateContext } from '../../context';

const Taskarea: FC = (): ReactElement => {
  const tasksUpdatedContext = useContext(TaskUpdateContext);

  const { error, isLoading, data, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => {
      return await sendApiRequest<ITaskApi[]>(
        'http://localhost:3200/tasks',
        'GET',
      );
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: (data: IUpdateTask) =>
      sendApiRequest('http://localhost:3200/tasks', 'PUT', data),
  });

  useEffect(() => {
    refetch();
  }, [tasksUpdatedContext.updated]);

  useEffect(() => {
    if (updateTaskMutation.isSuccess) {
      tasksUpdatedContext.toggle();
    }
  }, [updateTaskMutation.isSuccess]);

  function onStatusChangeHandler(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked ? Status.inProgress : Status.todo,
    });
  }

  function markCompleteHandler(
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  }

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
          <TaskCounter
            status={Status.todo}
            count={data ? countTasks(data, Status.todo) : undefined}
          />
          <TaskCounter
            status={Status.inProgress}
            count={data ? countTasks(data, Status.inProgress) : undefined}
          />
          <TaskCounter
            status={Status.completed}
            count={data ? countTasks(data, Status.completed) : undefined}
          />
        </Grid>
        <Grid item md={8} xs={10} display="flex" direction="column">
          <>
            {error && (
              <Alert severity="error">
                There was an error fetching your tasks.
              </Alert>
            )}

            {!error && Array.isArray(data) && data.length < 1 && (
              <Alert severity="warning">
                You do not have any task created. Start by creating a new task.
              </Alert>
            )}
          </>
          {isLoading ? (
            <LinearProgress />
          ) : (
            Array.isArray(data) &&
            data.length > 0 &&
            data
              .filter((task) => task.status !== Status.completed)
              .map((each, index) => {
                return (
                  <Task
                    id={each.id}
                    key={index + each.priority}
                    title={each.title}
                    date={new Date(each.date)}
                    priority={each.priority}
                    status={each.status}
                    description={each.description}
                    onStatusChange={onStatusChangeHandler}
                    onClick={markCompleteHandler}
                  />
                );
              })
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Taskarea;
