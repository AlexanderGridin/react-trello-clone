import { useNavigate } from "react-router-dom";
import { useBoardDispatchers } from "App/components/Board/state/hooks/useBoardDispatchers";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { BoardModel } from "App/entities/Board/BoardModel";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";

export const useBoardActions = (board: BoardModel) => {
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