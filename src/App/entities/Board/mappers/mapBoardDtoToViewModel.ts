import { BoardDto, BoardViewModel } from "../models";

export const mapBoardDtoToViewModel = (source: BoardDto): BoardViewModel => ({
  ...new BoardViewModel({}),
  id: source._id,
  title: source.title,
  isFavorite: source.isFavorite,
  rank: source.rank,
});
