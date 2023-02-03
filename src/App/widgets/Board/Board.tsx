import { FavoriteButton } from "App/components/FavoriteButton/FavoriteButton";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { BoardContainer } from "./components/BoardContainer";
import { BoardTitle } from "./components/BoardTitle";

export interface BoardProps {
  board: BoardViewModel;
  onFavorite: () => void;
  onRemove: () => void;
}

export const Board = ({ board, onRemove, onFavorite }: BoardProps) => {
  const remove = () => onRemove();
  const setFavorite = () => onFavorite();

  return (
    <BoardContainer>
      <FavoriteButton isFavorite={board.isFavorite} onClick={setFavorite} />
      <BoardTitle>{board.title}</BoardTitle>
      <RemoveButton onClick={remove} />
    </BoardContainer>
  );
};
