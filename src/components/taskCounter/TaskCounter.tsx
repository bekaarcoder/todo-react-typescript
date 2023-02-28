import React, { ReactElement, FC } from 'react';
import { Box, Avatar, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../taskform/enums/Status';
import { emitCorrectBorderColor } from './helpers/EmitCorrectBorderColor';
import { emitCorrectLabel } from './helpers/EmitCorrectLabel';
import PropTypes from 'prop-types';

const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { status = Status.todo, count = 0 } = props;

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${emitCorrectBorderColor(status)}`,
          }}
        >
          <Typography color="#ffffff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography
          sx={{
            color: 'primary.light',
            fontWeight: 'bold',
            fontSize: '20px',
          }}
          variant="h5"
        >
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};

TaskCounter.propTypes = {
  status: PropTypes.oneOf([Status.todo, Status.inProgress, Status.completed]),
  count: PropTypes.number,
};

export default TaskCounter;
