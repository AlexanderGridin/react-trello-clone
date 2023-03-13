import styled from "styled-components";
import { AddButtonContainer } from "App/components/AddButtonContainer/AddButtonContainer";
import { IChildren, IClick } from "shared/models";

const Container = styled(AddButtonContainer)`
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
    <Container type="button" onClick={onClick}>
      {children}
    </Container>
  );
};
