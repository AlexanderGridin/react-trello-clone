import { TaskPriority } from "App/widgets/tasks/TaskForm/TaskForm";

export interface TaskDto {
  _id: string;
  content: string;
  listId: string;
  boardId: string;
  priority: TaskPriority;
}
