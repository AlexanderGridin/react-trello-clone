import { AppActionType } from "App/state/enums/AppActionType.enum";
import { AppAction } from "App/state/models/AppAction";
import { AppState } from "App/state/models/AppState";
import { AddTasksListAction } from "./action-creators/createAddTasksListAction";
import { MoveTasksListAction } from "./action-creators/createMoveTasksListAction";
import { PinTasksListAction } from "./action-creators/createPinTasksListAction";
import { PushTaskInTasksListAction } from "./action-creators/createPushTaskInTasksListAction";
import { RemoveTasksListAction } from "./action-creators/createRemoveTasksListAction";
import { UnpinTasksListAction } from "./action-creators/createUnpinTasksListAction";
import { addTasksListReducer } from "./reducers/addTasksListReducer";
import { moveTasksListReducer } from "./reducers/moveTasksListReducer";
import { pinTasksListReducer } from "./reducers/pinTasksListReducer";
import { pushTaskInTasksListReducer } from "./reducers/pushTaskInTasksListReducer";
import { removeTasksListReducer } from "./reducers/removeTasksListReducer";
import { unpinTasksListReducer } from "./reducers/unpinTasksListReducer";

export * from "./hooks/useTasksListDispatcher";

export type TasksListAction =
  | AddTasksListAction
  | RemoveTasksListAction
  | MoveTasksListAction
  | PushTaskInTasksListAction
  | PinTasksListAction
  | UnpinTasksListAction;

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

    case AppActionType.PinList:
      return pinTasksListReducer(state, action);

    case AppActionType.UnpinList:
      return unpinTasksListReducer(state, action);

    default:
      return { ...state };
  }
};
