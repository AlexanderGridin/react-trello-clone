import { TaskPriority } from "App/types/TaskPriority";

export interface TaskUpdateDto {
  content: string;
  priority: TaskPriority;
  listId: string;
  boardId: string;
}
