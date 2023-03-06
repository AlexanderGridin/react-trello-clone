import { BoardUpdateDto, BoardViewModel } from "../models";

export const mapBoardViewModelToUpdateDto = (source: BoardViewModel): BoardUpdateDto => ({
  title: source.title,
  isFavorite: source.isFavorite,
});
