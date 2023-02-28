import { TextField } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { ITextField } from './interfaces/ITextField';

import PropTypes from 'prop-types';

const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  const { disabled = false, onChange = (e) => console.log(e) } = props;
  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

export default TaskDescriptionField;
