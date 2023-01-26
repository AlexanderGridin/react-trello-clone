import { ActionType } from "App/state/enums/ActionType.enum";
import { createAction } from "App/state/utils/createAction";
import { TasksListModel } from "../../models/TasksListModel";

interface RemoveTasksListActionPayload {
  list: TasksListModel;
}

export const removeTasksList = (list: TasksListModel) => {
  const { RemoveList } = ActionType;
  const payload: RemoveTasksListActionPayload = { list };

  return createAction<typeof RemoveList, RemoveTasksListActionPayload>(
    RemoveList,
    payload
  );
};

export type RemoveTasksListAction = ReturnType<typeof removeTasksList>;
