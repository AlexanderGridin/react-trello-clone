import { FavoriteButton } from "App/components/FavoriteButton/FavoriteButton";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { BoardContainer } from "./components/BoardContainer";
import { BoardTitle } from "./components/BoardTitle";
import { useBoardFeatures } from "./hooks/useBoardFeatures";

export interface BoardProps {
  board: BoardViewModel;
}

export const Board = ({ board }: BoardProps) => {
  const { remove, toggleFavorite } = useBoardFeatures(board);

  return (
    <BoardContainer>
      <FavoriteButton isFavorite={board.isFavorite} onClick={toggleFavorite} />
      <BoardTitle>{board.title}</BoardTitle>
      <RemoveButton onClick={remove} />
    </BoardContainer>
  );
};
