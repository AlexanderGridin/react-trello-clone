import { AddTasksListAction } from "./action-creators/createAddTasksListAction";
import { MoveTasksListAction } from "./action-creators/createMoveTasksListAction";
import { PushTaskInTasksListAction } from "./action-creators/createPushTaskInTasksListAction";
import { RemoveTasksListAction } from "./action-creators/createRemoveTasksListAction";
import { UpdateTasksListAction } from "./action-creators/createUpdateTasksListAction";

export * from "./hooks/useTasksListDispatcher";
export * from "./tasksListReducer";

export type TasksListAction =
  | AddTasksListAction
  | RemoveTasksListAction
  | MoveTasksListAction
  | PushTaskInTasksListAction
  | UpdateTasksListAction;

export type TasksListModuleAction = { module: "TasksList" } & TasksListAction;
