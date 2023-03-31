import { IChildren, IClick } from "shared/models";

import { StyledAddButton } from "../../../../components/StyledAddButton";

interface IAddTaskButtonProps extends IChildren, IClick {}

export const AddTaskButton = ({ children, onClick }: IAddTaskButtonProps) => {
  return (
    <StyledAddButton type="button" isTextDark onClick={onClick}>
      {children}
    </StyledAddButton>
  );
};
