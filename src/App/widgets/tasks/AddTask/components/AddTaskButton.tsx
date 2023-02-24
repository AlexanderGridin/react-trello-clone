import { AddButtonContainer } from "App/components/AddButtonContainer/AddButtonContainer";
import { Children } from "shared/models/Children";
import { Click } from "shared/models/Click";

interface AddTaskButtonProps extends Children, Click {}

export const AddTaskButton = ({ children, onClick }: AddTaskButtonProps) => {
  return (
    <AddButtonContainer type="button" isTextDark onClick={onClick}>
      {children}
    </AddButtonContainer>
  );
};
