import { TaskModel } from "App/components/Task/models/TaskModel";
import { TasksListItem } from "./components/TasksListItem";

interface TasksListItemsProps {
  tasks: TaskModel[];
}

export const TasksListItems = ({ tasks }: TasksListItemsProps) => {
  if (!tasks.length) {
    return null;
  }

  return (
    <ul className="plain-list">
      {tasks.map((task: TaskModel) => (
        <TasksListItem task={task} key={task.id} />
      ))}
    </ul>
  );
};
