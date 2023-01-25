import { ActionType } from "App/state/enums/ActionType.enum";
import { AppState } from "./models/AppState";
import { AppAction } from "./models/AppAction";
import { setDraggedItemReducer } from "./shared/DraggedItem/reducers/setDraggedItemReducer";
import { addTasksListReducer } from "App/components/TasksList/state/reducers/addTasksListReducer";
import { removeTasksListReducer } from "App/components/TasksList/state/reducers/removeTasksListReducer";
import { moveTasksListReducer } from "App/components/TasksList/state/reducers/moveTaskListReducer";
import { addTaskReducer } from "App/components/Task/state/reducers/addTaskReducer";
import { removeTaskReducer } from "App/components/Task/state/reducers/removeTaskReducer";
import { moveTaskReducer } from "App/components/Task/state/reducers/moveTaskReducer";
import { pushTaskInTasksListReducer } from "App/components/TasksList/state/reducers/pushTaskInTasksListReducer";

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.AddList:
      return addTasksListReducer(state, action);

    case ActionType.RemoveList:
      return removeTasksListReducer(state, action);

    case ActionType.MoveList:
      return moveTasksListReducer(state, action);

    case ActionType.PushTaskInTasksList:
      return pushTaskInTasksListReducer(state, action);

    case ActionType.AddTask:
      return addTaskReducer(state, action);

    case ActionType.RemoveTask:
      return removeTaskReducer(state, action);

    case ActionType.MoveTask:
      return moveTaskReducer(state, action);

    case ActionType.SetDraggedItem:
      return setDraggedItemReducer(state, action);

    default:
      return { ...state };
  }
};
