import { Status } from '../../taskform/enums/Status';
import { StatusType } from '../interfaces/ITaskCounter';

export const emitCorrectBorderColor = (status: StatusType): string => {
  switch (status) {
    case Status.todo:
      return 'error.light';
    case Status.completed:
      return 'success.light';
    case Status.inProgress:
      return 'warning.light';
  }
};
