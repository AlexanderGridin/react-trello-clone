import { useNavigate } from "react-router-dom";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { useBoardDispatchers } from "../state/hooks/useBoardDispatchers";

export const useBoardFeatures = (board: BoardViewModel) => {
  const navigate = useNavigate();
  const { dispatchRemoveBoard, dispatchMoveBoard } = useBoardDispatchers();

  const remove = () => dispatchRemoveBoard(board);

  const dropOnBoard = (draggedItem: AppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Board) {
      return;
    }

    const draggedBoard = draggedItem.data;
    dispatchMoveBoard(draggedBoard, board);
  };

  const navigateToBoard = () => navigate(`boards/${board.id}`);

  return { remove, dropOnBoard, navigateToBoard };
};
