import { RemoveButton } from "shared/components/Buttons/RemoveButton";
import { BoardContainer } from "./components/BoardContainer";
import { BoardTitle } from "./components/BoardTitle";
import { BoardModel } from "./models/BoardModel";

export interface BoardProps {
  board: BoardModel;
  onRemove: () => void;
}

export const Board = ({ board, onRemove }: BoardProps) => {
  const remove = () => onRemove();

  return (
    <BoardContainer>
      <BoardTitle>{board.title}</BoardTitle>
      <RemoveButton onClick={remove} />
    </BoardContainer>
  );
};
