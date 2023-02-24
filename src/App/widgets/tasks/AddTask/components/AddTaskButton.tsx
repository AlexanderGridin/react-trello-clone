import { AddButtonContainer } from "App/components/AddButtonContainer/AddButtonContainer";
import { PropsWithChildren } from "react";
import { PropsWithClick } from "shared/models/PropsWithClick";

interface AddTaskButtonProps extends PropsWithChildren, PropsWithClick {}

export const AddTaskButton = ({ children, onClick }: AddTaskButtonProps) => {
  return (
    <AddButtonContainer type="button" isTextDark onClick={onClick}>
      {children}
    </AddButtonContainer>
  );
};
