import { mapTasksListDtoToViewModel } from "../TasksList/mappers/mapTasksListDtoToViewModel";
import { TasksListDto } from "../TasksList/TasksListDto";
import { TasksListViewModel } from "../TasksList/TasksListViewModel";

export interface BoardWithTasksListsDto {
  _id: string;
  title: string;
  tasksLists?: TasksListDto[];
  isFavorite: boolean;
}

export class BoardWithTasksListsViewModel {
  public id = "";
  public title: string;
  public tasksLists: TasksListViewModel[] = [];
  public pinnedTasksLists: TasksListViewModel[] = [];
  public isFavorite = false;

  constructor({ title = "" }: { title?: string }) {
    this.title = title;
  }
}

export const mapBoardWithTasksListsDtoToViewModel = (
  source: BoardWithTasksListsDto
): BoardWithTasksListsViewModel => {
  const pinnedTasksLists: TasksListViewModel[] = [];
  const tasksLists: TasksListViewModel[] = [];

  source.tasksLists?.forEach((list: TasksListDto) => {
    if (list.isPinned) {
      pinnedTasksLists.push(mapTasksListDtoToViewModel(list));
      return;
    }

    tasksLists.push(mapTasksListDtoToViewModel(list));
  });

  return {
    ...new BoardWithTasksListsViewModel({}),
    id: source._id,
    title: source.title,
    tasksLists,
    pinnedTasksLists,
    isFavorite: source.isFavorite,
  };
};
