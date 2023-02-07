import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { AddTask } from "../AddTask/AddTask";
import { ListOfTasksListItem } from "./components/ListOfTasksListItem";
import { useListOfTasksFeatures } from "./hooks/useListOfTasksFeatures";

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
  const { addTask } = useListOfTasksFeatures(boardId, listId);

  if (!tasks.length) {
    return null;
  }

  return (
    <>
      <ul className="plain-list">
        {tasks.map((task: TaskViewModel) => (
          <li key={task.id} className="mb">
            <ListOfTasksListItem task={task} key={task.id} />
          </li>
        ))}
      </ul>

      {isShowAddTask && <AddTask onAdd={addTask} />}
    </>
  );
};
