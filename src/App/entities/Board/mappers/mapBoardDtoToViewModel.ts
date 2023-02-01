import { BoardDto } from "../BoardDto";
import { BoardViewModel } from "../BoardViewModel";

export const mapBoardDtosToViewModels = (
  source: BoardDto[]
): BoardViewModel[] => {
  return source.map(
    (boardDto: BoardDto): BoardViewModel => ({
      id: boardDto.id,
      title: boardDto.title,
      tasksLists: boardDto.tasksLists,
      pinnedTasksLists: [],
    })
  );
};
