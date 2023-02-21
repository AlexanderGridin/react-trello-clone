import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";
import { TasksListViewModel } from "../../TasksListViewModel";

interface UpdateTasksListActionPayload {
  list: TasksListViewModel;
}

export type UpdateTasksListAction = Action<AppActionType.UpdateList, UpdateTasksListActionPayload>;

export const createUpdateTasksListAction = (list: TasksListViewModel): UpdateTasksListAction => ({
  type: AppActionType.UpdateList,
  payload: { list },
});
