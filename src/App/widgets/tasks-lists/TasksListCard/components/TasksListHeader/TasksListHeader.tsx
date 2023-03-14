import { EditButton } from "App/components/buttons/EditButton/EditButton";
import { PinButton } from "App/components/buttons/PinButton/PinButton";
import { RemoveButton } from "App/components/buttons/RemoveButton/RemoveButton";
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
      <RemoveButton className={style.RemoveButton} onClick={onRemove} />
    </div>
  );
};
