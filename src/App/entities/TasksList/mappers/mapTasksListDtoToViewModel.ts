import { mapTaskDtoToViewModel } from "App/entities/Task/mappers/mapTaskDotToViewModel";
import { TasksListDto } from "../TasksListDto";
import { TasksListViewModel } from "../TasksListViewModel";

export const mapTasksListDtoToViewModel = (source: TasksListDto): TasksListViewModel => ({
  id: source._id,
  boardId: source.boardId,
  title: source.title,
  tasks: source.tasks.map(mapTaskDtoToViewModel),
  isPinned: source.isPinned,
});
