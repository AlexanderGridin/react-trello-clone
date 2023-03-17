import styled from "styled-components";

import { IChildren, IClick } from "shared/models";
import { StyledAddButton } from "App/components/StyledAddButton";

const StyledAddBoardButton = styled(StyledAddButton)`
  min-height: 150px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

interface IAddBoardButtonProps extends IChildren, IClick {}

export const AddBoardButton = ({ children, onClick }: IAddBoardButtonProps) => {
  return (
    <StyledAddBoardButton type="button" onClick={onClick}>
      {children}
    </StyledAddBoardButton>
  );
};
