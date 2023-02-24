import { AddButtonContainer } from "App/components/AddButtonContainer/AddButtonContainer";
import { PropsWithChildren } from "react";
import { PropsWithClick } from "shared/models/PropsWithClick";

interface AddListButtonProps extends PropsWithChildren, PropsWithClick {}

export const AddListButton = ({ children, onClick }: AddListButtonProps) => {
  return (
    <AddButtonContainer type="button" onClick={onClick}>
      {children}
    </AddButtonContainer>
  );
};
