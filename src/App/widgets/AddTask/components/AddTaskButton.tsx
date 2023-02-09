import { AddButtonContainer } from "App/components/AddButtonContainer/AddButtonContainer";
import { PropsWithChildren } from "react";
import { ButtonType } from "shared/components/Button/enums/ButtonType";
import { PropsWithClick } from "shared/models/PropsWithClick";

interface AddTaskButtonProps extends PropsWithChildren, PropsWithClick {}

export const AddTaskButton = ({ children, onClick }: AddTaskButtonProps) => {
  return (
    <AddButtonContainer
      type={ButtonType.Button}
      isFullWidth
      isTextDark
      onClick={onClick}
    >
      {children}
    </AddButtonContainer>
  );
};
