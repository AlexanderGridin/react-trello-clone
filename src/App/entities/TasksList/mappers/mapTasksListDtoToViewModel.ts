import { TaskDto } from "App/entities/Task/models";
import { TasksListDto, TasksListViewModel } from "../models";

export const mapTasksListDtoToViewModel = (source: TasksListDto): TasksListViewModel => ({
  ...new TasksListViewModel({}),
  id: source._id,
  boardId: source.boardId,
  title: source.title,
  tasks: source.tasks.map(TaskDto.toViewModel),
  isPinned: source.isPinned,
});
