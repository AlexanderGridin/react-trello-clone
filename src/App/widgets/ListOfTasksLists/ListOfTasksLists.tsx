import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { AddTasksList } from "../AddTasksList/AddTasksList";
import { TasksList } from "../TasksList/TasksList";
import { ListOfTasksListsDragLayer } from "./components/ListOfTasksListsDragLayer";
import { useListOfTasksListsFeatures } from "./hooks/useListOfTasksListsFeatures";
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
  const { addTasksList } = useListOfTasksListsFeatures(boardId);

  if (!lists.length) {
    return null;
  }

  return (
    <div className={style.container}>
      <ListOfTasksListsDragLayer />

      {lists.map((list: TasksListViewModel) => (
        <div className={style.cell} key={list.id}>
          <TasksList list={list} isShowAddTask />
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
