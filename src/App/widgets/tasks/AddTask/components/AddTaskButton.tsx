import { AddButtonContainer } from "App/components/AddButtonContainer/AddButtonContainer";
import { IChildren, IClick } from "shared/models";

interface IAddTaskButtonProps extends IChildren, IClick {}

export const AddTaskButton = ({ children, onClick }: IAddTaskButtonProps) => {
  return (
    <AddButtonContainer type="button" isTextDark onClick={onClick}>
      {children}
    </AddButtonContainer>
  );
};
