import { Status } from '../../taskform/enums/Status';

export type StatusType = Status.todo | Status.completed | Status.inProgress;

export interface ITaskCounter {
  count?: number;
  status?: StatusType;
}
