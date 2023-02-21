import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "../AppDraggedItem/AppDraggedItem";

export interface BoardDto {
  _id: string;
  title: string;
  isFavorite: boolean;
  rank: number;
}

export class BoardViewModel {
  public id = "";
  public title: string;
  public isFavorite = false;
  public isEditing = false;
  public rank = 0;

  constructor({ title = "" }: { title?: string }) {
    this.title = title;
  }
}

export const mapBoardDtoToViewModel = (source: BoardDto): BoardViewModel => ({
  ...new BoardViewModel({}),
  id: source._id,
  title: source.title,
  isFavorite: source.isFavorite,
  rank: source.rank,
});

export const mapBoardToDraggedItem = (board: BoardViewModel): AppDraggedItem => ({
  id: board.id,
  type: DraggedItemType.Board,
  acceptType: DraggedItemType.Board,
  data: { ...board },
});
