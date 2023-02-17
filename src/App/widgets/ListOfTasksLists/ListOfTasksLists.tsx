import { useTasksListDispatchers } from "App/entities/TasksList/state/hooks/useTasksListDispatchers";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AddTasksList } from "../AddTasksList/AddTasksList";
import { DragLayer } from "../DragLayer/DragLayer";
import { TasksListCard } from "../TasksListCard/TasksListCard";
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

  const addTasksList = (list: TasksListViewModel) => dispatchAddTasksList(list);

  if (!lists.length) {
    return (
      <div className={style.cell}>
        <AddTasksList boardId={boardId} onAdd={addTasksList} />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <DragLayer />

      {lists.map((list: TasksListViewModel) => (
        <div className={style.cell} key={list.id}>
          <TasksListCard list={list} />
        </div>
      ))}

      {isShowAddTasksList && (
        <div className={style.cell}>
          <AddTasksList boardId={boardId} onAdd={addTasksList} />
        </div>
      )}
    </div>
  );
};
