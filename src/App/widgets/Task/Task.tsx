import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import style from "./Task.module.css";

interface TaskProps {
  task: TaskViewModel;
  onRemove: (task: TaskViewModel) => void;
}

export const Task = ({ task, onRemove }: TaskProps) => {
  const remove = () => onRemove(task);

  return (
    <div className={style.container}>
      <div className={style.content}>{task.content}</div>
      <RemoveButton className="mr-0" onClick={remove} />
    </div>
  );
};
