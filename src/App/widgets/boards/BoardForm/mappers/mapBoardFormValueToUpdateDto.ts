import { BoardUpdateDto } from "App/entities/Board/models";
import { BoardFormValue } from "../models";

export const mapBoardFormValueToUpdateDto = (source: BoardFormValue): BoardUpdateDto => ({
  title: source.title,
  isFavorite: source.isFavorite,
});
