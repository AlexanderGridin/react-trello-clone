import { PropsWithChildren } from "react";
import { ButtonType } from "shared/enums/ButtonType";
import { AddButton } from "App/components/AddButton/AddButton";
import { PropsWithClick } from "shared/models/PropsWithClick";

interface AddTaskButtonProps extends PropsWithChildren, PropsWithClick {}

export const AddTaskButton = ({ children, onClick }: AddTaskButtonProps) => {
  return (
    <AddButton
      type={ButtonType.Button}
      isFullWidth
      isTextDark
      onClick={onClick}
    >
      {children}
    </AddButton>
  );
};
