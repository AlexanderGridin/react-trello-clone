import { AddBoardAction } from "App/components/Board/state/actions/addBoard";
import { MoveBoardAction } from "App/components/Board/state/actions/moveBoard";
import { RemoveBoardAction } from "App/components/Board/state/actions/removeBoard";
import { AddTaskAction } from "App/components/Task/state/actions/addTask";
import { MoveTaskAction } from "App/components/Task/state/actions/moveTask";
import { RemoveTaskAction } from "App/components/Task/state/actions/removeTask";
import { AddTasksListAction } from "App/components/TasksList/state/actions/addTasksList";
import { MoveTasksListAction } from "App/components/TasksList/state/actions/moveTasksList";
import { PushTaskInTasksListAction } from "App/components/TasksList/state/actions/pushTaskInTasksList";
import { RemoveTasksListAction } from "App/components/TasksList/state/actions/removeTasksList";
import { SetDraggedItemAction } from "../shared/DraggedItem/actions/setDraggedItem";

export type AppAction =
  // TasksList
  | AddTasksListAction
  | RemoveTasksListAction
  | MoveTasksListAction
  | PushTaskInTasksListAction
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
