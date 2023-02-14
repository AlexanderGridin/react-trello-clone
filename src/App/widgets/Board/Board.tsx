import { FavoriteButton } from "App/components/FavoriteButton/FavoriteButton";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { BoardViewModel } from "App/entities/Board/Board";
import { BoardContainer } from "./components/BoardContainer";
import { BoardTitle } from "./components/BoardTitle";

export interface BoardProps {
  board: BoardViewModel;
  onRemove: (board: BoardViewModel) => void;
  onFavorite: (board: BoardViewModel) => void;
}

export const Board = ({ board, onRemove, onFavorite }: BoardProps) => {
  const remove = () => onRemove(board);
  const toggleFavorite = () => {
    const updatedBoard = board.isFavorite
      ? {
          ...board,
          isFavorite: false,
        }
      : {
          ...board,
          isFavorite: true,
        };

    onFavorite(updatedBoard);
  };

  return (
    <BoardContainer>
      <FavoriteButton isFavorite={board.isFavorite} onClick={toggleFavorite} />
      <BoardTitle>{board.title}</BoardTitle>
      <RemoveButton onClick={remove} />
    </BoardContainer>
  );
};
