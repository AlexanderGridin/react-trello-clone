import { IChildren, IClick } from "shared/models";

import { StyledAddButton } from "../../../../components/StyledAddButton";

interface IAddListButtonProps extends IChildren, IClick {}

export const AddListButton = ({ children, onClick }: IAddListButtonProps) => {
  return (
    <StyledAddButton type="button" onClick={onClick}>
      {children}
    </StyledAddButton>
  );
};
