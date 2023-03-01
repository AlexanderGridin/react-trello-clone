import { mapTaskDtoToViewModel } from "App/entities/Task/mappers";
import { TasksListDto, TasksListViewModel } from "../models";

export const mapTasksListDtoToViewModel = (source: TasksListDto): TasksListViewModel => ({
  ...new TasksListViewModel({}),
  id: source._id,
  boardId: source.boardId,
  title: source.title,
  tasks: source.tasks.map(mapTaskDtoToViewModel),
  isPinned: source.isPinned,
});
