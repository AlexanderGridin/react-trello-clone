import { TaskDto } from "../TaskDto";
import { TaskViewModel } from "../TaskViewModel";

export const mapTaskDtoToViewModel = (source: TaskDto): TaskViewModel => ({
  ...new TaskViewModel({}),
  id: source._id,
  boardId: source.boardId,
  listId: source.listId,
  content: source.content,
  priority: source.priority,
});
