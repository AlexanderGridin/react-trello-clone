import { useTaskDispatchers } from "App/entities/Task/state/hooks/useTaskDispatchers";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { AddTask } from "../AddTask/AddTask";
import { ListOfTasksListItem } from "./components/ListOfTasksListItem";

interface ListOfTasksProps {
  boardId: string;
  listId: string;
  tasks: TaskViewModel[];
  isShowAddTask?: boolean;
}

export const ListOfTasks = ({
  boardId,
  listId,
  tasks,
  isShowAddTask = false,
}: ListOfTasksProps) => {
  const { dispatchAddTask } = useTaskDispatchers();

  const addTask = (task: TaskViewModel) =>
    dispatchAddTask({ ...task, listId, boardId });

  return (
    <>
      {tasks.length > 0 && (
        <ul className="plain-list">
          {tasks.map((task: TaskViewModel) => (
            <li key={task.id} className="mb">
              <ListOfTasksListItem task={task} key={task.id} />
            </li>
          ))}
        </ul>
      )}

      {isShowAddTask && (
        <AddTask boardId={boardId} listId={listId} onAdd={addTask} />
      )}
    </>
  );
};
