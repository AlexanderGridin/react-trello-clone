import { AddButtonContainer } from "App/components/AddButtonContainer/AddButtonContainer";
import { PropsWithChildren } from "react";
import { ButtonType } from "shared/components/Button/enums/ButtonType";
import { PropsWithClick } from "shared/models/PropsWithClick";

interface AddListButtonProps extends PropsWithChildren, PropsWithClick {}

export const AddListButton = ({ children, onClick }: AddListButtonProps) => {
  return (
    <AddButtonContainer type={ButtonType.Button} isFullWidth onClick={onClick}>
      {children}
    </AddButtonContainer>
  );
};
