import { BoardViewModel } from "entities/Board/models";

import { EditButton, FavoriteButton, DeleteButton } from "../../../components/buttons";
import style from "./Board.module.css";

export interface IBoardProps {
  board: BoardViewModel;
  onRemove: (board: BoardViewModel) => void;
  onFavorite: (board: BoardViewModel) => void;
  onEdit: (board: BoardViewModel) => void;
}

export const Board = ({ board, onRemove, onEdit, onFavorite }: IBoardProps) => {
  const remove = () => onRemove(board);
  const edit = () => onEdit(board);
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
      <EditButton onClick={edit} />
      <DeleteButton className={style.RemoveButton} onClick={remove} />
    </div>
  );
};
