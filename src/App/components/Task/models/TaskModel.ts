import { generateId } from "shared/utils/generateId";

interface TaskModelConfig {
  listId?: string;
  content?: string;
}

export class TaskModel {
  public readonly id: string = generateId();

  public listId: string;
  public content: string;

  constructor({ listId = "", content = "" }: TaskModelConfig) {
    this.listId = listId;
    this.content = content;
  }
}
