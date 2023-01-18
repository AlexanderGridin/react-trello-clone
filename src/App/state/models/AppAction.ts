import { AddListAction } from "App/state/actions/list/addList";
import { RemoveListAction } from "App/state/actions/list/removeList";
import { AddTaskAction } from "App/state/actions/task/addTask";
import { RemoveTaskAction } from "App/state/actions/task/removeTask";

export type AppAction =
  | AddListAction
  | RemoveListAction
  | AddTaskAction
  | RemoveTaskAction;
