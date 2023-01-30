import { TaskModel } from "App/components/Task/models/TaskModel";
import { TasksListItem } from "./components/TasksListItem";

interface TasksListItemsProps {
  tasks: TaskModel[];
  isDragPreview?: boolean;
}

export const TasksListItems = ({
  tasks,
  isDragPreview = false,
}: TasksListItemsProps) => {
  if (!tasks.length) {
    return null;
  }

  return (
    <ul className="plain-list">
      {tasks.map((task: TaskModel) => (
        <TasksListItem
          task={task}
          key={task.id}
          isDragPreview={isDragPreview}
        />
      ))}
    </ul>
  );
};
