import { BoardModel } from "App/entities/Board/BoardModel";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/models/AppDraggedItem";

export const mapBoardToDraggedItem = (board: BoardModel): AppDraggedItem => ({
  id: board.id,
  type: DraggedItemType.Board,
  acceptType: DraggedItemType.Board,
  data: { ...board },
});
