import { TaskModel } from "App/components/Task/models/TaskModel";
import { TasksListTask } from "./components/TasksListTask";

interface TasksListTasksProps {
  tasks: TaskModel[];
  isDragPreview?: boolean;
}

export const TasksListTasks = ({
  tasks,
  isDragPreview = false,
}: TasksListTasksProps) => {
  if (!tasks.length) {
    return null;
  }

  return (
    <ul className="plain-list">
      {tasks.map((task: TaskModel) => (
        <TasksListTask
          task={task}
          key={task.id}
          isDragPreview={isDragPreview}
        />
      ))}
    </ul>
  );
};
