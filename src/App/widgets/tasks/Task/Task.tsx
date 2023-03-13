import { EditButton } from "App/components/buttons/EditButton/EditButton";
import { RemoveButton } from "App/components/buttons/RemoveButton/RemoveButton";
import { TaskViewModel } from "App/entities/Task/models";
import style from "./Task.module.css";

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
      <div className={style.content}>{task.title}</div>
      <EditButton onClick={edit} />
      <RemoveButton className="mr-0" onClick={remove} />
    </div>
  );
};
