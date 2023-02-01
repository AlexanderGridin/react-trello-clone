import { useTasksListDispatchers } from "App/components/TasksList/state/hooks/useTasksListDispatchers";
import { BoardModel } from "App/entities/Board/BoardModel";

export const useBoardPageActions = (board: BoardModel) => {
  const { dispatchAddTasksList } = useTasksListDispatchers();
  const addTasksList = (title: string) => dispatchAddTasksList(title, board.id);

  return { addTasksList };
};
