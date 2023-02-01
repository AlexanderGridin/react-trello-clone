import { generateId } from "shared/utils/generateId";

interface TaskModelConfig {
  boardId?: string;
  listId?: string;
  content?: string;
}

export class TaskModel {
  public readonly id: string = generateId();

  public listId: string;
  public boardId: string;
  public content: string;

  constructor({ listId = "", boardId = "", content = "" }: TaskModelConfig) {
    this.listId = listId;
    this.boardId = boardId;
    this.content = content;
  }
}
