import { TaskModel } from "App/components/Task/models/TaskModel";
import { TasksListItem } from "../components/TasksListItem";

export const renderTasks = (tasks: TaskModel[], isDragPreview = false) => {
  if (!tasks.length) {
    return null;
  }

  if (isDragPreview) {
    return (
      <ul className="plain-list">
        {tasks.map((task: TaskModel) => (
          <TasksListItem task={task} key={task.id} isDragPreview />
        ))}
      </ul>
    );
  }

  return (
    <ul className="plain-list">
      {tasks.map((task: TaskModel) => (
        <TasksListItem task={task} key={task.id} />
      ))}
    </ul>
  );
};
