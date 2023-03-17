import { StyledAddButton } from "App/components/StyledAddButton";
import { IChildren, IClick } from "shared/models";

interface IAddTaskButtonProps extends IChildren, IClick {}

export const AddTaskButton = ({ children, onClick }: IAddTaskButtonProps) => {
  return (
    <StyledAddButton type="button" isTextDark onClick={onClick}>
      {children}
    </StyledAddButton>
  );
};
