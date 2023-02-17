import { FavoriteButton } from "App/components/FavoriteButton/FavoriteButton";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { BoardViewModel } from "App/entities/Board/Board";
import style from "./Board.module.css";

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
    <div className={style.container}>
      <FavoriteButton isFavorite={board.isFavorite} onClick={toggleFavorite} />
      <h2 className={style.title}>{board.title}</h2>
      <RemoveButton onClick={remove} />
    </div>
  );
};
