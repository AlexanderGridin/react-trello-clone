import { generateId } from "shared/utils/generateId";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";

export interface BoardViewModelConfig {
  id?: string;
  title?: string;
  tasksLists?: TasksListViewModel[];
}

export class BoardViewModel {
  public readonly id: string;

  public title: string;
  public tasksLists: TasksListViewModel[];
  public pinnedTasksLists: TasksListViewModel[] = [];

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
