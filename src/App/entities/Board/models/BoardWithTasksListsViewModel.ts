import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";

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
