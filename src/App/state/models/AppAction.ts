import { AddBoardAction } from "App/widgets/Board/state/actions/addBoard";
import { MoveBoardAction } from "App/widgets/Board/state/actions/moveBoard";
import { RemoveBoardAction } from "App/widgets/Board/state/actions/removeBoard";
import { AddTaskAction } from "App/widgets/Task/state/actions/addTask";
import { MoveTaskAction } from "App/widgets/Task/state/actions/moveTask";
import { RemoveTaskAction } from "App/widgets/Task/state/actions/removeTask";
import { AddTasksListAction } from "App/widgets/TasksList/state/actions/addTasksList";
import { MoveTasksListAction } from "App/widgets/TasksList/state/actions/moveTasksList";
import { PushTaskInTasksListAction } from "App/widgets/TasksList/state/actions/pushTaskInTasksList";
import { RemoveTasksListAction } from "App/widgets/TasksList/state/actions/removeTasksList";
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
