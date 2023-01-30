import { BoardModel } from "App/components/Board/models/BoardModel";
import { useTasksListDispatchers } from "App/components/TasksList/state/hooks/useTasksListDispatchers";

export const useBoardPageActions = (board: BoardModel) => {
  const { dispatchAddTasksList } = useTasksListDispatchers();
  const addTasksList = (title: string) => dispatchAddTasksList(title, board.id);

  return { addTasksList };
};
