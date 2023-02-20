import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";

interface RemoveTasksListActionPayload {
  list: TasksListViewModel;
}

export type RemoveTasksListAction = Action<AppActionType.RemoveList, RemoveTasksListActionPayload>;

export const createRemoveTasksListAction = (list: TasksListViewModel): RemoveTasksListAction => ({
  type: AppActionType.RemoveList,
  payload: { list },
});
