import { TasksListViewModel } from "entities/TasksList/models";

export class BoardWithTasksListsViewModel {
  public id!: string;
  public title!: string;
  public tasksLists: TasksListViewModel[] = [];
  public pinnedTasksLists: TasksListViewModel[] = [];
  public isFavorite = false;
}
