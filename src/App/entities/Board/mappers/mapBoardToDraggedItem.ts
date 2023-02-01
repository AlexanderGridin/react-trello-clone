import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { DraggedItemType } from "App/enums/DraggedItemType";

export const mapBoardToDraggedItem = (
  board: BoardViewModel
): AppDraggedItem => ({
  id: board.id,
  type: DraggedItemType.Board,
  acceptType: DraggedItemType.Board,
  data: { ...board },
});
