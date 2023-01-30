import { BoardModel } from "App/components/Board/models/BoardModel";
import { useBoardDispatchers } from "App/components/Board/state/hooks/useBoardDispatchers";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/models/AppDraggedItem";

export const useBoardActions = (board: BoardModel) => {
  const { dispatchRemoveBoard, dispatchMoveBoard } = useBoardDispatchers();

  const remove = () => dispatchRemoveBoard(board);

  const dropOnBoard = (draggedItem: AppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Board) {
      return;
    }

    const draggedBoard = draggedItem.data;
    dispatchMoveBoard(draggedBoard, board);
  };

  return { remove, dropOnBoard };
};
