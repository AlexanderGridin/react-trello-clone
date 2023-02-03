import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { useTasksListDispatchers } from "App/entities/TasksList/state/hooks/useTasksListDispatchers";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";

export const useBoardPageFeatures = (board: BoardViewModel) => {
  const { dispatchAddTasksList } = useTasksListDispatchers();

  const addTasksList = (list: TasksListViewModel) =>
    dispatchAddTasksList({ ...list, boardId: board.id });

  return { addTasksList };
};
