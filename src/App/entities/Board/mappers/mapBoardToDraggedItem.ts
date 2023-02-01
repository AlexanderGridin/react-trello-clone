import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { BoardModel } from "App/entities/Board/BoardModel";
import { DraggedItemType } from "App/enums/DraggedItemType";

export const mapBoardToDraggedItem = (board: BoardModel): AppDraggedItem => ({
  id: board.id,
  type: DraggedItemType.Board,
  acceptType: DraggedItemType.Board,
  data: { ...board },
});
