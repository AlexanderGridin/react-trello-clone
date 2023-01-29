import { BoardModel } from "App/components/Board/models/BoardModel";
import { useBoardDispatchers } from "App/components/Board/state/hooks/useBoardDispatchers";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/models/AppDraggedItem";

export const useBoardsListActions = () => {
  const { dispatchAddBoard, dispatchRemoveBoard, dispatchMoveBoard } =
    useBoardDispatchers();

  const add = (title: string) => dispatchAddBoard(new BoardModel({ title }));

  const remove = (board: BoardModel) => () => dispatchRemoveBoard(board);

  const dropOnBoard = (board: BoardModel) => (draggedItem: AppDraggedItem) => {
    if (draggedItem.type !== DraggedItemType.Board) {
      return;
    }

    const draggedBoard = draggedItem.data;
    dispatchMoveBoard(draggedBoard, board);
  };

  return { add, remove, dropOnBoard };
};
