import { AddListAction } from "state/actions/list/addList";
import { RemoveListAction } from "state/actions/list/removeList";
import { AddTaskAction } from "state/actions/task/addTask";
import { RemoveTaskAction } from "state/actions/task/removeTask";

export type AppAction =
  | AddListAction
  | RemoveListAction
  | AddTaskAction
  | RemoveTaskAction;
