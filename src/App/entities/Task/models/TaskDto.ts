import { TaskPriority } from "App/types/TaskPriority";

export interface TaskDto {
  _id: string;
  content: string;
  listId: string;
  boardId: string;
  priority: TaskPriority;
}
