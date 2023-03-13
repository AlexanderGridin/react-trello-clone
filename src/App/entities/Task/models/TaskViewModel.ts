import { TTaskPriority } from "App/types/TaskPriority";
import { generateId } from "shared/utils/generateId";

interface TaskViewModelConfig {
  boardId?: string;
  listId?: string;
  content?: string;
}

export class TaskViewModel {
  public readonly id: string = generateId();

  public listId: string;
  public boardId: string;
  // TODO: update content to be "title"
  public content: string;
  public isEditing = false;
  public priority: TTaskPriority = "regular";
  public user!: { id: string; name: string };

  constructor({ listId = "", boardId = "", content = "" }: TaskViewModelConfig) {
    this.listId = listId;
    this.boardId = boardId;
    this.content = content;
  }
}
