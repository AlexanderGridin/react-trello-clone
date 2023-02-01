import { generateId } from "shared/utils/generateId";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";

export interface BoardModelConfig {
  id?: string;
  title?: string;
  tasksLists?: TasksListModel[];
}

export class BoardModel {
  public readonly id: string;

  public title: string;
  public tasksLists: TasksListModel[];

  constructor({
    title = "",
    id = generateId(),
    tasksLists = [],
  }: BoardModelConfig) {
    this.title = title;
    this.id = id;
    this.tasksLists = tasksLists;
  }
}
