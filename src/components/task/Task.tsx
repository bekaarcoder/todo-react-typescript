import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import TaskHeader from './TaskHeader';
import TaskDescription from './TaskDescription';
import TaskFooter from './TaskFooter';
import { ITask } from './interfaces/ITask';
import { Priority } from '../taskform/enums/Priority';
import { Status } from '../taskform/enums/Status';
import PropTypes from 'prop-types';
import { renderPriorityBorderColor } from './helpers/RenderPriorityBorderColor';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'Test Title',
    date = new Date(),
    description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    priority = Priority.low,
    status = Status.todo,
    onStatusChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      mb={3}
      p={4}
      width="100%"
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter onClick={onClick} onStatusChange={onStatusChange} />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};

export default Task;
