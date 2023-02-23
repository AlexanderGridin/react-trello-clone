import { Action } from "App/state/models/Action";
import { TasksListViewModel } from "../../TasksListViewModel";
import { TasksListActionType } from "../TasksListActionType.enum";

interface UpdateTasksListActionPayload {
  list: TasksListViewModel;
}

export type UpdateTasksListAction = Action<TasksListActionType.UpdateList, UpdateTasksListActionPayload>;

export const createUpdateTasksListAction = (list: TasksListViewModel): UpdateTasksListAction => ({
  type: TasksListActionType.UpdateList,
  payload: { list },
});
