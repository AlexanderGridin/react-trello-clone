import { useTasksListDispatchers } from "App/entities/TasksList/state/hooks/useTasksListDispatchers";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";

export const useListOfTasksListsFeatures = (boardId: string) => {
  const { dispatchAddTasksList } = useTasksListDispatchers();

  const addTasksList = (list: TasksListViewModel) =>
    dispatchAddTasksList({ ...list, boardId });

  return { addTasksList };
};
