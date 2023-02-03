import { generateId } from "shared/utils/generateId";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";

export interface BoardDtoConfig {
  id?: string;
  title?: string;
  tasksLists?: TasksListViewModel[];
}

export class BoardDto {
  public readonly id: string;

  public title: string;
  public tasksLists: TasksListViewModel[];

  constructor({
    title = "",
    id = generateId(),
    tasksLists = [],
  }: BoardDtoConfig) {
    this.title = title;
    this.id = id;
    this.tasksLists = tasksLists;
  }
}
