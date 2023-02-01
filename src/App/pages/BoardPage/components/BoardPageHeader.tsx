import styled from "styled-components";
import { BoardModel } from "App/entities/Board/BoardModel";

const BoardPageTitle = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 1.3;
  color: #fff;
  margin: 0;
`;

const BoardPageHeaderContainer = styled.header`
  padding: 10px 20px;
`;

interface BoardPageHeaderProps {
  board: BoardModel;
}

export const BoardPageHeader = ({ board }: BoardPageHeaderProps) => {
  return (
    <BoardPageHeaderContainer>
      <BoardPageTitle>{board.title}</BoardPageTitle>
    </BoardPageHeaderContainer>
  );
};
