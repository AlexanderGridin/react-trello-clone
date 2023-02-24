import { AddButtonContainer } from "App/components/AddButtonContainer/AddButtonContainer";
import { Children } from "shared/models/Children";
import { Click } from "shared/models/Click";

interface AddListButtonProps extends Children, Click {}

export const AddListButton = ({ children, onClick }: AddListButtonProps) => {
  return (
    <AddButtonContainer type="button" onClick={onClick}>
      {children}
    </AddButtonContainer>
  );
};
