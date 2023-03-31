import { EditButton, DeleteButton } from "App/components/buttons";
import { TaskViewModel } from "entities/Task/models";

import style from "./Task.module.css";

interface ITaskProps {
  task: TaskViewModel;
  onRemove: (task: TaskViewModel) => void;
  onEdit: (task: TaskViewModel) => void;
}

export const Task = ({ task, onEdit, onRemove }: ITaskProps) => {
  const edit = () => onEdit(task);
  const remove = () => onRemove(task);

  return (
    <div className={style.container}>
      <div className={style.content}>{task.title}</div>
      <EditButton onClick={edit} />
      <DeleteButton className="mr-0" onClick={remove} />
    </div>
  );
};
