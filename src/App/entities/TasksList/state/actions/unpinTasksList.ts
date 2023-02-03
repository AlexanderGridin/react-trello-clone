import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";

interface UnpinTasksListActionPayload {
  list: TasksListModel;
}

export const unpinTasksList = (list: TasksListModel) => {
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
