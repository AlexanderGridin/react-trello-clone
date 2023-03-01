import { AppDraggedItem } from "App/entities/AppDraggedItem/models";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { BoardViewModel } from "../models";

export const mapBoardViewModelToDraggedItem = (board: BoardViewModel): AppDraggedItem => ({
  id: board.id,
  type: DraggedItemType.Board,
  acceptType: DraggedItemType.Board,
  data: { ...board },
});
