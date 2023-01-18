import { useAppState } from "App/state/hooks/useAppState";
import { addList } from "App/state/actions/list/addList";
import { BoardContainer } from "./components/BoardContainer";
import { TasksListModel } from "./components/TasksList/models/TasksListModel";
import { TasksList } from "./components/TasksList/TasksList";
import { AddList } from "./components/AddList/AddList";

export const Board = (): JSX.Element => {
  const { tasksLists, dispatch } = useAppState();
  const addNewList = (title: string) => dispatch(addList(title));

  return (
    <BoardContainer>
      {tasksLists.map((list: TasksListModel) => (
        <TasksList key={list.id} list={list} />
      ))}

      <AddList onAdd={addNewList}>+ Add new list</AddList>
    </BoardContainer>
  );
};
