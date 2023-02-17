import { PinButton } from "App/components/PinButton/PinButton";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import style from "./TasksListHeader.module.css";

interface TasksListHeaderProps {
  list: TasksListViewModel;
  onRemove: () => void;
  onPin: () => void;
}
export const TasksListHeader = ({
  list,
  onRemove,
  onPin,
}: TasksListHeaderProps) => {
  const remove = () => onRemove();
  const togglePin = () => onPin();

  return (
    <div className={style.container}>
      <PinButton
        className={style.PinButton}
        isPinned={list.isPinned}
        onClick={togglePin}
      />

      <h3 className={style.title}>{list.title}</h3>

      <RemoveButton className={style.RemoveButton} onClick={remove} />
    </div>
  );
};
