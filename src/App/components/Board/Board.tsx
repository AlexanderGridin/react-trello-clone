import { useAppState } from "state/hooks/useAppState";
import { AddList } from "App/components/AddList/AddList";
import { TasksList } from "App/components/TasksList/TasksList";
import { addList } from "state/actions/list/addList";
import { BoardContainer } from "./components/BoardContainer";
import { TasksListModel } from "App/components/TasksList/models/TasksListModel";

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
