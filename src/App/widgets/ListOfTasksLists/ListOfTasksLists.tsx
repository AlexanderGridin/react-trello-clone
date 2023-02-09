import { useTasksListDispatchers } from "App/entities/TasksList/state/hooks/useTasksListDispatchers";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AddTasksList } from "../AddTasksList/AddTasksList";
import { DragLayer } from "../DragLayer/DragLayer";
import { TasksList } from "../TasksList/TasksList";
import style from "./ListOfTasksLists.module.css";

interface ListOfTasksListsProps {
  boardId: string;
  lists: TasksListViewModel[];
  isShowAddTasksList?: boolean;
}

export const ListOfTasksLists = ({
  boardId,
  lists,
  isShowAddTasksList = false,
}: ListOfTasksListsProps) => {
  const { dispatchAddTasksList } = useTasksListDispatchers();

  const addTasksList = (list: TasksListViewModel) =>
    dispatchAddTasksList({ ...list, boardId });

  if (!lists.length) {
    return null;
  }

  return (
    <div className={style.container}>
      <DragLayer />

      {lists.map((list: TasksListViewModel) => (
        <div className={style.cell} key={list.id}>
          <TasksList list={list} />
        </div>
      ))}

      {isShowAddTasksList && (
        <div className={style.cell}>
          <AddTasksList onAdd={addTasksList} />
        </div>
      )}
    </div>
  );
};
