import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { Action } from "App/state/models/Action";

interface AddTasksListActionPayload {
  list: TasksListViewModel;
}

export type AddTasksListAction = Action<AppActionType.AddList, AddTasksListActionPayload>;

export const createAddTasksListAction = (list: TasksListViewModel): AddTasksListAction => ({
  type: AppActionType.AddList,
  payload: { list },
});
