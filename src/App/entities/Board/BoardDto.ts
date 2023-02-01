import { generateId } from "shared/utils/generateId";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";

export interface BoardDtoConfig {
  id?: string;
  title?: string;
  tasksLists?: TasksListModel[];
}

export class BoardDto {
  public readonly id: string;

  public title: string;
  public tasksLists: TasksListModel[];

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
