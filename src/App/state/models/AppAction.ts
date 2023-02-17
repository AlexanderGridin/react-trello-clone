import { SetAppDraggedItemAction } from "App/entities/AppDraggedItem/state/actions/setAppDraggedItem";
import { AddBoardAction } from "App/entities/Board/state/actions/createAddBoardAction";
import { CacheBoardAction } from "App/entities/Board/state/actions/createCacheBoardAction";
import { MoveBoardAction } from "App/entities/Board/state/actions/createMoveBoardAction";
import { RemoveBoardAction } from "App/entities/Board/state/actions/createRemoveBoardAction";
import { SetBoardsAction } from "App/entities/Board/state/actions/createSetBoardsAction";
import { SetIsShowFavoritesAction } from "App/entities/Board/state/actions/createSetIsShowFavoritesAction";
import { UpdateBoardAction } from "App/entities/Board/state/actions/createUpdateBoardAction";
import { AddTaskAction } from "App/entities/Task/state/actions/addTask";
import { MoveTaskAction } from "App/entities/Task/state/actions/moveTask";
import { RemoveTaskAction } from "App/entities/Task/state/actions/removeTask";
import { AddTasksListAction } from "App/entities/TasksList/state/actions/addTasksList";
import { MoveTasksListAction } from "App/entities/TasksList/state/actions/moveTasksList";
import { PinTasksListAction } from "App/entities/TasksList/state/actions/pinTasksList";
import { PushTaskInTasksListAction } from "App/entities/TasksList/state/actions/pushTaskInTasksList";
import { RemoveTasksListAction } from "App/entities/TasksList/state/actions/removeTasksList";
import { UnpinTasksListAction } from "App/entities/TasksList/state/actions/unpinTasksList";

export type AppAction =
  // TasksList
  | AddTasksListAction
  | RemoveTasksListAction
  | MoveTasksListAction
  | PushTaskInTasksListAction
  | PinTasksListAction
  | UnpinTasksListAction
  //Task
  | AddTaskAction
  | RemoveTaskAction
  | MoveTaskAction
  //DraggedItem
  | SetAppDraggedItemAction
  // Board
  | CacheBoardAction
  | AddBoardAction
  | UpdateBoardAction
  | RemoveBoardAction
  | SetBoardsAction
  | SetIsShowFavoritesAction
  | MoveBoardAction;
