export interface ITaskFooter {
  onStatusChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => void;
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => void;
  id: string;
  status?: string;
}
