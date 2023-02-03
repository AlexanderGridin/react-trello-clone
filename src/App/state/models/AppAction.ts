import { SetAppDraggedItemAction } from "App/entities/AppDraggedItem/state/actions/setAppDraggedItem";
import { AddBoardAction } from "App/entities/Board/state/actions/addBoard";
import { MoveBoardAction } from "App/entities/Board/state/actions/moveBoard";
import { PushBoardInFavoritesAction } from "App/entities/Board/state/actions/pushBoardInFavorites";
import { RemoveBoardAction } from "App/entities/Board/state/actions/removeBoard";
import { RemoveBoardFromFavoritesAction } from "App/entities/Board/state/actions/removeBoardFromFavorites";
import { UpdateBoardAction } from "App/entities/Board/state/actions/updateBoard";
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
  | AddBoardAction
  | UpdateBoardAction
  | RemoveBoardAction
  | PushBoardInFavoritesAction
  | RemoveBoardFromFavoritesAction
  | MoveBoardAction;
