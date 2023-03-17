import { StyledAddButton } from "App/components/StyledAddButton";
import { IChildren, IClick } from "shared/models";

interface IAddListButtonProps extends IChildren, IClick {}

export const AddListButton = ({ children, onClick }: IAddListButtonProps) => {
  return (
    <StyledAddButton type="button" onClick={onClick}>
      {children}
    </StyledAddButton>
  );
};
