import { PinButton, DeleteButton, EditButton } from "App/components/buttons";

import style from "./TasksListHeader.module.css";

interface ITasksListHeaderProps {
  title: string;
  isPinned: boolean;
  onRemove: () => void;
  onEdit: () => void;
  onPin: () => void;
}
export const TasksListHeader = ({ title, isPinned, onRemove, onEdit, onPin }: ITasksListHeaderProps) => {
  return (
    <div className={style.container}>
      <PinButton className={style.PinButton} isPinned={isPinned} onClick={onPin} />
      <h3 className={style.title}>{title}</h3>
      <EditButton onClick={onEdit} />
      <DeleteButton className={style.RemoveButton} onClick={onRemove} />
    </div>
  );
};
