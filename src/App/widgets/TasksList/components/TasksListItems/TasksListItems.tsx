import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListItem } from "./components/TasksListItem";

interface TasksListItemsProps {
  tasks: TaskViewModel[];
}

export const TasksListItems = ({ tasks }: TasksListItemsProps) => {
  if (!tasks.length) {
    return null;
  }

  return (
    <ul className="plain-list">
      {tasks.map((task: TaskViewModel) => (
        <TasksListItem task={task} key={task.id} />
      ))}
    </ul>
  );
};
