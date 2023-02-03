import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { TasksList } from "App/widgets/TasksList/TasksList";
import { BoardPageCell } from "./BoardPageCell";

interface BoardPageTasksListsProps {
  lists: TasksListViewModel[];
}

export const BoardPageTasksLists = ({ lists }: BoardPageTasksListsProps) => {
  if (!lists.length) {
    return null;
  }

  return (
    <>
      {lists.map((list: TasksListViewModel) => (
        <BoardPageCell key={list.id}>
          <TasksList list={list} />
        </BoardPageCell>
      ))}
    </>
  );
};
