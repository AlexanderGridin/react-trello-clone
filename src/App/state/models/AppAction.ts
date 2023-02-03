import { AddBoardAction } from "App/entities/Board/state/actions/addBoard";
import { MoveBoardAction } from "App/entities/Board/state/actions/moveBoard";
import { RemoveBoardAction } from "App/entities/Board/state/actions/removeBoard";
import { AddTaskAction } from "App/entities/Task/state/actions/addTask";
import { MoveTaskAction } from "App/entities/Task/state/actions/moveTask";
import { RemoveTaskAction } from "App/entities/Task/state/actions/removeTask";
import { AddTasksListAction } from "App/entities/TasksList/state/actions/addTasksList";
import { MoveTasksListAction } from "App/entities/TasksList/state/actions/moveTasksList";
import { PinTasksListAction } from "App/entities/TasksList/state/actions/pinTasksList";
import { PushTaskInTasksListAction } from "App/entities/TasksList/state/actions/pushTaskInTasksList";
import { RemoveTasksListAction } from "App/entities/TasksList/state/actions/removeTasksList";
import { UnpinTasksListAction } from "App/entities/TasksList/state/actions/unpinTasksList";
import { SetDraggedItemAction } from "App/state/shared/DraggedItem/actions/setDraggedItem";

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
  | SetDraggedItemAction
  // Board
  | AddBoardAction
  | RemoveBoardAction
  | MoveBoardAction;
