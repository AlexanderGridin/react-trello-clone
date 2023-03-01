import { EditButton } from "App/components/buttons/EditButton/EditButton";
import { PinButton } from "App/components/buttons/PinButton/PinButton";
import { RemoveButton } from "App/components/buttons/RemoveButton/RemoveButton";
import { TasksListViewModel } from "App/entities/TasksList/models";
import style from "./TasksListHeader.module.css";

interface TasksListHeaderProps {
  list: TasksListViewModel;
  onRemove: () => void;
  onEdit: () => void;
  onPin: () => void;
}
export const TasksListHeader = ({ list, onRemove, onEdit, onPin }: TasksListHeaderProps) => {
  const remove = () => onRemove();
  const edit = () => onEdit();
  const togglePin = () => onPin();

  return (
    <div className={style.container}>
      <PinButton className={style.PinButton} isPinned={list.isPinned} onClick={togglePin} />
      <h3 className={style.title}>{list.title}</h3>
      <EditButton onClick={edit} />
      <RemoveButton className={style.RemoveButton} onClick={remove} />
    </div>
  );
};
