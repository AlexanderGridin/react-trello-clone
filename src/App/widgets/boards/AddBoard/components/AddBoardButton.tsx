import styled from "styled-components";
import { AddButtonContainer } from "App/components/AddButtonContainer/AddButtonContainer";
import { Children } from "shared/models/Children";
import { Click } from "shared/models/Click";

const Container = styled(AddButtonContainer)`
  min-height: 150px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

interface AddBoardButtonProps extends Children, Click {}

export const AddBoardButton = ({ children, onClick }: AddBoardButtonProps) => {
  return (
    <Container type="button" onClick={onClick}>
      {children}
    </Container>
  );
};
