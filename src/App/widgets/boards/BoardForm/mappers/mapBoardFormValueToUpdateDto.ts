import { IBoardUpdateDto } from "App/entities/Board/models";
import { BoardFormValue } from "../models";

export const mapBoardFormValueToUpdateDto = (source: BoardFormValue): IBoardUpdateDto => ({
  title: source.title,
  isFavorite: source.isFavorite,
});
