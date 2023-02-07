import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { useTaskFeatures } from "./hooks/useTaskFeatures";
import style from "./Task.module.css";

interface TaskProps {
  task: TaskViewModel;
}

export const Task = ({ task }: TaskProps) => {
  const { removeTask } = useTaskFeatures(task);

  return (
    <div className={style.container}>
      <div className={style.content}>{task.content}</div>
      <RemoveButton className="mr-0" onClick={removeTask} />
    </div>
  );
};
