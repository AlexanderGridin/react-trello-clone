import { BoardUpdateManyDto, BoardViewModel } from "../models";

export const mapBoardViewModelToUpdateManyDto = (source: BoardViewModel): BoardUpdateManyDto => ({
  id: source.id,
  rank: source.rank,
});
