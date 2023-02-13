import { FavoriteButton } from "App/components/FavoriteButton/FavoriteButton";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { useBoardDispatchers } from "App/entities/Board/state/hooks/useBoardDispatchers";
import { BoardContainer } from "./components/BoardContainer";
import { BoardTitle } from "./components/BoardTitle";

export interface BoardProps {
  board: BoardViewModel;
}

export const Board = ({ board }: BoardProps) => {
  const { dispatchRemoveBoard, dispatchUpdateBoard } = useBoardDispatchers();

  const remove = () => dispatchRemoveBoard(board);
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

    dispatchUpdateBoard(updatedBoard);
  };

  return (
    <BoardContainer>
      <FavoriteButton isFavorite={board.isFavorite} onClick={toggleFavorite} />
      <BoardTitle>{board.title}</BoardTitle>
      <RemoveButton onClick={remove} />
    </BoardContainer>
  );
};
