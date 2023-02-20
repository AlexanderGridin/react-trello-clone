import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import style from "./Task.module.css";
import { EditButton } from "App/components/EditButton/EditButton";

interface TaskProps {
  task: TaskViewModel;
  onRemove: (task: TaskViewModel) => void;
  onEdit: (task: TaskViewModel) => void;
}

export const Task = ({ task, onEdit, onRemove }: TaskProps) => {
  const edit = () => onEdit(task);
  const remove = () => onRemove(task);

  return (
    <div className={style.container}>
      <div className={style.content}>{task.content}</div>
      <EditButton onClick={edit} />
      <RemoveButton className="mr-0" onClick={remove} />
    </div>
  );
};
