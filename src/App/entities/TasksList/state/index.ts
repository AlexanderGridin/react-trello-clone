import { AppActionType } from "App/state/enums/AppActionType.enum";
import { AppAction } from "App/state/models/AppAction";
import { AppState } from "App/state/models/AppState";
import { AddTasksListAction } from "./action-creators/createAddTasksListAction";
import { MoveTasksListAction } from "./action-creators/createMoveTasksListAction";
import { PushTaskInTasksListAction } from "./action-creators/createPushTaskInTasksListAction";
import { RemoveTasksListAction } from "./action-creators/createRemoveTasksListAction";
import { UpdateTasksListAction } from "./action-creators/createUpdateTasksListAction";
import { addTasksListReducer } from "./reducers/addTasksListReducer";
import { moveTasksListReducer } from "./reducers/moveTasksListReducer";
import { pushTaskInTasksListReducer } from "./reducers/pushTaskInTasksListReducer";
import { removeTasksListReducer } from "./reducers/removeTasksListReducer";
import { updateTasksListReducer } from "./reducers/updateTasksListReducer";

export * from "./hooks/useTasksListDispatcher";

export type TasksListAction =
  | AddTasksListAction
  | RemoveTasksListAction
  | MoveTasksListAction
  | PushTaskInTasksListAction
  | UpdateTasksListAction;

export type TasksListModuleAction = { module: "TasksList" } & TasksListAction;

export const tasksListReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionType.AddList:
      return addTasksListReducer(state, action);

    case AppActionType.RemoveList:
      return removeTasksListReducer(state, action);

    case AppActionType.MoveList:
      return moveTasksListReducer(state, action);

    case AppActionType.PushTaskInTasksList:
      return pushTaskInTasksListReducer(state, action);

    case AppActionType.UpdateList:
      return updateTasksListReducer(state, action);

    default:
      return { ...state };
  }
};
