import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "App/state/utils/createAction";

interface UnpinTasksListActionPayload {
  list: TasksListViewModel;
}

export const unpinTasksList = (list: TasksListViewModel) => {
  const { UnpinList } = AppActionType;
  const payload: UnpinTasksListActionPayload = {
    list,
  };

  return createAction<typeof UnpinList, UnpinTasksListActionPayload>(
    UnpinList,
    payload
  );
};

export type UnpinTasksListAction = ReturnType<typeof unpinTasksList>;
