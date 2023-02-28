import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';

import PropTypes from 'prop-types';

const TaskTitleField: FC<ITextField> = (props): ReactElement => {
  const { onChange = (e) => console.log(e.target.value), disabled = false } =
    props;
  return (
    <TextField
      id="title"
      label="Task Title"
      variant="outlined"
      size="small"
      name="title"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default TaskTitleField;
