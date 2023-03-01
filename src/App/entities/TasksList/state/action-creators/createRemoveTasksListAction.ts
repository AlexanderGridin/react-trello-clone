import { Action } from "App/state/models/Action";
import { TasksListViewModel } from "../../models";
import { TasksListActionType } from "../TasksListActionType.enum";

interface RemoveTasksListActionPayload {
  list: TasksListViewModel;
}

export type RemoveTasksListAction = Action<TasksListActionType.RemoveList, RemoveTasksListActionPayload>;

export const createRemoveTasksListAction = (list: TasksListViewModel): RemoveTasksListAction => ({
  type: TasksListActionType.RemoveList,
  payload: { list },
});
