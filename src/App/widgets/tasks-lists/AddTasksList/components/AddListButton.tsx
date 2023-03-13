import { AddButtonContainer } from "App/components/AddButtonContainer/AddButtonContainer";
import { IChildren, IClick } from "shared/models";

interface IAddListButtonProps extends IChildren, IClick {}

export const AddListButton = ({ children, onClick }: IAddListButtonProps) => {
  return (
    <AddButtonContainer type="button" onClick={onClick}>
      {children}
    </AddButtonContainer>
  );
};
