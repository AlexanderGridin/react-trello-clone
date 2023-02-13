import { TasksListViewModel } from "../TasksList/TasksListViewModel";

export interface BoardWithTasksListsDto {
  _id: string;
  title: string;
  tasksLists: TasksListViewModel[];
}

export class BoardWithTasksListsViewModel {
  public id = "";
  public title: string;
  public tasksLists: TasksListViewModel[] = [];
  public pinnedTasksLists: TasksListViewModel[] = [];

  constructor({ title = "" }: { title?: string }) {
    this.title = title;
  }
}

export const mapBoardWithTasksListsDtoToViewModel = (
  source: BoardWithTasksListsDto
): BoardWithTasksListsViewModel => ({
  ...new BoardWithTasksListsViewModel({}),
  id: source._id,
  title: source.title,
  tasksLists: [...source.tasksLists],
});
