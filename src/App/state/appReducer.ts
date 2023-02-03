import { AppState } from "./models/AppState";
import { AppAction } from "./models/AppAction";
import { setDraggedItemReducer } from "./shared/DraggedItem/reducers/setDraggedItemReducer";
import { addTasksListReducer } from "App/widgets/TasksList/state/reducers/addTasksListReducer";
import { removeTasksListReducer } from "App/widgets/TasksList/state/reducers/removeTasksListReducer";
import { addTaskReducer } from "App/widgets/Task/state/reducers/addTaskReducer";
import { removeTaskReducer } from "App/widgets/Task/state/reducers/removeTaskReducer";
import { moveTaskReducer } from "App/widgets/Task/state/reducers/moveTaskReducer";
import { pushTaskInTasksListReducer } from "App/widgets/TasksList/state/reducers/pushTaskInTasksListReducer";
import { AppActionType } from "./enums/AppActionType.enum";
import { moveTasksListReducer } from "App/widgets/TasksList/state/reducers/moveTasksListReducer";
import { pinTasksListReducer } from "App/widgets/TasksList/state/reducers/pinTasksListReducer";
import { unpinTasksListReducer } from "App/widgets/TasksList/state/reducers/unpinTasksListReducer";
import { addBoardReducer } from "App/entities/Board/state/reducers/addBoardReducer";
import { removeBoardReducer } from "App/entities/Board/state/reducers/removeBoardReducer";
import { moveBoardReducer } from "App/entities/Board/state/reducers/moveBoardReducer";

export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    // TasksList
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

    // Task
    case AppActionType.AddTask:
      return addTaskReducer(state, action);

    case AppActionType.RemoveTask:
      return removeTaskReducer(state, action);

    case AppActionType.MoveTask:
      return moveTaskReducer(state, action);

    // DraggedItem
    case AppActionType.SetDraggedItem:
      return setDraggedItemReducer(state, action);

    // Board
    case AppActionType.AddBoard:
      return addBoardReducer(state, action);

    case AppActionType.RemoveBoard:
      return removeBoardReducer(state, action);

    case AppActionType.MoveBoard:
      return moveBoardReducer(state, action);

    default:
      return { ...state };
  }
};
