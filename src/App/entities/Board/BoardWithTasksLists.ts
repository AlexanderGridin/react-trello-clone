import { mapTasksListDtoToViewModel } from "../TasksList/mappers/mapTasksListDtoToViewModel";
import { TasksListDto } from "../TasksList/TasksListDto";
import { TasksListViewModel } from "../TasksList/TasksListViewModel";
import { parseTasksLists } from "./utils/parseTasksLists";

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
  const { pinnedTasksLists, tasksLists } = parseTasksLists<TasksListDto>(
    source.tasksLists ?? []
  );

  return {
    ...new BoardWithTasksListsViewModel({}),
    id: source._id,
    title: source.title,
    tasksLists: tasksLists.map(mapTasksListDtoToViewModel),
    pinnedTasksLists: pinnedTasksLists.map(mapTasksListDtoToViewModel),
    isFavorite: source.isFavorite,
  };
};
