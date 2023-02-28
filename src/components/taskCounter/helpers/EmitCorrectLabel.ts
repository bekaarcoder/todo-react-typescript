import { Status } from '../../taskform/enums/Status';
import { StatusType } from '../interfaces/ITaskCounter';

export const emitCorrectLabel = (status: StatusType): string => {
  switch (status) {
    case Status.todo:
      return 'Todo';
    case Status.completed:
      return 'Completed';
    case Status.inProgress:
      return 'In Progress';
  }
};
