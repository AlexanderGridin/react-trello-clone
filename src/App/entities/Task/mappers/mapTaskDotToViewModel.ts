import { TaskDto } from "../TaskDto";
import { TaskViewModel } from "../TaskViewModel";

export const mapTaskDtoToViewModel = (source: TaskDto): TaskViewModel => ({
  id: source._id,
  boardId: source.boardId,
  listId: source.listId,
  content: source.content,
});