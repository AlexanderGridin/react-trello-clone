import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";

interface AddTasksListActionPayload {
  list: TasksListViewModel;
}

export const addTasksList = (list: TasksListViewModel) => {
  const { AddList } = AppActionType;
  const payload: AddTasksListActionPayload = {
    list,
  };

  return createAction<typeof AddList, AddTasksListActionPayload>(
    AddList,
    payload
  );
};

export type AddTasksListAction = ReturnType<typeof addTasksList>;
