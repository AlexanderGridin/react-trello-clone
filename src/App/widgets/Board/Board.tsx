import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { BoardModel } from "App/entities/Board/BoardModel";
import { BoardContainer } from "./components/BoardContainer";
import { BoardTitle } from "./components/BoardTitle";

export interface BoardProps {
  board: BoardModel;
  onRemove: () => void;
}

export const Board = ({ board, onRemove }: BoardProps) => {
  const remove = () => onRemove();

  return (
    <BoardContainer>
      <BoardTitle>{board.title}</BoardTitle>
      <RemoveButton className="mr-0" onClick={remove} />
    </BoardContainer>
  );
};
