import { generateId } from "shared/utils/generateId";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";

export interface BoardViewModelConfig {
  id?: string;
  title?: string;
  tasksLists?: TasksListModel[];
}

export class BoardViewModel {
  public readonly id: string;

  public title: string;
  public tasksLists: TasksListModel[];
  public pinnedTasksLists: TasksListModel[] = [];

  constructor({
    title = "",
    id = generateId(),
    tasksLists = [],
  }: BoardViewModelConfig) {
    this.title = title;
    this.id = id;
    this.tasksLists = tasksLists;
  }
}
