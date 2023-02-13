import { BoardViewModel } from "./BoardViewModel";

export interface BoardSimpleDto {
  _id: string;
  title: string;
  rank: number;
  isFavorite: boolean;
}

export const mapBoardsSimpleDtoToViewModel = (
  source: BoardSimpleDto
): BoardViewModel => {
  return {
    ...new BoardViewModel({}),
    id: source._id,
    isFavorite: source.isFavorite,
    rank: source.rank,
    title: source.title,
  };
};
