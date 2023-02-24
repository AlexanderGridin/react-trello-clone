import { AddTaskAction } from "./action-creators/createAddTaskAction";
import { MoveTaskAction } from "./action-creators/createMoveTaskAction";
import { RemoveTaskAction } from "./action-creators/createRemoveTaskAction";
import { UpdateTaskAction } from "./action-creators/createUpdateTaskAction";

export * from "./hooks/useTaskDispatcher";
export * from "./taskReducer";

export type TaskAction = AddTaskAction | RemoveTaskAction | MoveTaskAction | UpdateTaskAction;
export type TaskModuleAction = { module: "Task" } & TaskAction;
