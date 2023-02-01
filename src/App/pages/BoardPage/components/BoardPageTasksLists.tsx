import { TasksList } from "App/components/TasksList/TasksList";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
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
