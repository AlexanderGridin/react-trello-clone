import { TTaskPriority } from "App/types/TaskPriority";

export interface TaskDto {
  _id: string;
  content: string;
  listId: string;
  boardId: string;
  priority: TTaskPriority;
  user: {
    _id: string;
    name: string;
  };
}
