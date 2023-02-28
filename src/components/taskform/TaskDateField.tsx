import React, { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from '@mui/material';
import { IDateField } from './interfaces/IDateField';
import PropTypes from 'prop-types';

const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const {
    disabled = false,
    onChange = (date) => console.log(date),
    value = new Date(),
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        label="Task Date"
        inputFormat="dd/MM/yyyy"
        renderInput={(params) => <TextField {...params} />}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </LocalizationProvider>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
};

export default TaskDateField;
