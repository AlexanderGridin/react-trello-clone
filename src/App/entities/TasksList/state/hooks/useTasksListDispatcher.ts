import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { useAppState } from "App/state/hooks/useAppState";
import { TasksListAction } from "..";
import { createAddTasksListAction } from "../action-creators/createAddTasksListAction";
import { createMoveTasksListAction } from "../action-creators/createMoveTasksListAction";
import { createPinTasksListAction } from "../action-creators/createPinTasksListAction";
import { createPushTaskInTasksListAction } from "../action-creators/createPushTaskInTasksListAction";
import { createRemoveTasksListAction } from "../action-creators/createRemoveTasksListAction";
import { createUnpinTasksListAction } from "../action-creators/createUnpinTasksListAction";

export const useTasksListDispatcher = () => {
  const { dispatch } = useAppState();

  const dispatchForModule = (action: TasksListAction) =>
    dispatch({
      module: "TasksList",
      ...action,
    });

  const addTasksList = (list: TasksListViewModel) => dispatchForModule(createAddTasksListAction(list));

  const removeTasksList = (list: TasksListViewModel) => dispatchForModule(createRemoveTasksListAction(list));

  const moveTasksList = (listToMove: TasksListViewModel, listToReplace: TasksListViewModel) =>
    dispatchForModule(createMoveTasksListAction(listToMove, listToReplace));

  const pushTaskInTasksList = (list: TasksListViewModel, task: TaskViewModel) =>
    dispatchForModule(createPushTaskInTasksListAction(list, task));

  const pinTasksList = (list: TasksListViewModel) => dispatchForModule(createPinTasksListAction(list));

  const unpinTasksList = (list: TasksListViewModel) => dispatchForModule(createUnpinTasksListAction(list));

  return {
    addTasksList,
    removeTasksList,
    moveTasksList,
    pushTaskInTasksList,
    pinTasksList,
    unpinTasksList,
  };
};
