import { PropsWithChildren } from "react";
import { AddButton } from "App/components/AddButton/AddButton";
import { ButtonType } from "shared/enums/ButtonType";
import { PropsWithClick } from "shared/models/PropsWithClick";

interface AddListButtonProps extends PropsWithChildren, PropsWithClick {}

export const AddListButton = ({ children, onClick }: AddListButtonProps) => {
  return (
    <AddButton type={ButtonType.Button} isFullWidth onClick={onClick}>
      {children}
    </AddButton>
  );
};
