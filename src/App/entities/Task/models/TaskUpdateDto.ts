import { TTaskPriority } from "App/types/TaskPriority";

export interface TaskUpdateDto {
  content: string;
  priority: TTaskPriority;
  listId: string;
  boardId: string;
}
