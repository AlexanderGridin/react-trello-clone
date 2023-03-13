import { TasksListViewModel } from "App/entities/TasksList/models";

export class BoardWithTasksListsViewModel {
  public id!: string;
  public title!: string;
  public tasksLists: TasksListViewModel[] = [];
  public pinnedTasksLists: TasksListViewModel[] = [];
  public isFavorite = false;
}
