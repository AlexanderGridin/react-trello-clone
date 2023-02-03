import { BoardViewModel } from "App/entities/Board/BoardViewModel";
import { useTasksListDispatchers } from "App/entities/TasksList/state/hooks/useTasksListDispatchers";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";

export const useBoardPageFeatures = (board: BoardViewModel) => {
  const { dispatchAddTasksList } = useTasksListDispatchers();

  const addTasksList = (list: TasksListModel) =>
    dispatchAddTasksList({ ...list, boardId: board.id });

  return { addTasksList };
};
