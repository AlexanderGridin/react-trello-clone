import { AppActionType } from "App/state/enums/AppActionType.enum";
import { createAction } from "shared/state/utils/createAction";
import { TasksListModel } from "../../models/TasksListModel";

interface RemoveTasksListActionPayload {
  list: TasksListModel;
}

export const removeTasksList = (list: TasksListModel) => {
  const { RemoveList } = AppActionType;
  const payload: RemoveTasksListActionPayload = { list };

  return createAction<typeof RemoveList, RemoveTasksListActionPayload>(
    RemoveList,
    payload
  );
};

export type RemoveTasksListAction = ReturnType<typeof removeTasksList>;
