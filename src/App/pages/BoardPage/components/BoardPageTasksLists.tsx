import { TasksListModel } from "App/components/TasksList/models/TasksListModel";
import { TasksList } from "App/components/TasksList/TasksList";
import { BoardPageCell } from "./BoardPageCell";

interface BoardPageTasksListsProps {
  lists: TasksListModel[];
}

export const BoardPageTasksLists = ({ lists }: BoardPageTasksListsProps) => {
  if (!lists.length) {
    return null;
  }

  return (
    <>
      {lists.map((list: TasksListModel) => (
        <BoardPageCell key={list.id}>
          <TasksList list={list} />
        </BoardPageCell>
      ))}
    </>
  );
};
