import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { generateId } from "shared/utils/generateId";

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
