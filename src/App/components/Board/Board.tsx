import { useAppState } from "App/state/hooks/useAppState";
import { BoardContainer } from "./components/BoardContainer";
import { TasksListModel } from "./components/TasksList/models/TasksListModel";
import { TasksList } from "./components/TasksList/TasksList";
import { AddList } from "./components/AddList/AddList";
import { useBoardActions } from "./hooks/useBoardActions";

export const Board = (): JSX.Element => {
  const { tasksLists } = useAppState();
  const { addTasksList } = useBoardActions();

  return (
    <BoardContainer>
      {tasksLists.map((list: TasksListModel) => (
        <TasksList key={list.id} list={list} />
      ))}

      <AddList onAdd={addTasksList}>+ Add new list</AddList>
    </BoardContainer>
  );
};
