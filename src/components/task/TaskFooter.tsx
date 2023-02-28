import React, { FC, ReactElement } from 'react';
import { Box, Switch, FormControlLabel, Button } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import PropTypes from 'prop-types';

const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {
    onClick = (e) => console.log(e),
    onStatusChange = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={3}
    >
      <FormControlLabel
        label="In Progress"
        control={<Switch color="warning" onChange={(e) => onStatusChange(e)} />}
      ></FormControlLabel>
      <Button
        variant="contained"
        size="small"
        color="success"
        sx={{
          color: '#ffffff',
          textTransform: 'capitalize',
        }}
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default TaskFooter;
