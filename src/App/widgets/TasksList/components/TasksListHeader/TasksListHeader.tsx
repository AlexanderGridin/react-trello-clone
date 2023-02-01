import { PinButton } from "App/components/PinButton/PinButton";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { TasksListHeaderContainer } from "./components/TasksListHeaderContainer";
import { TasksListTitle } from "./components/TasksListTitle";
import style from "./TasksListHeader.module.css";

interface TasksListHeaderProps {
  list: TasksListModel;
  onRemove: () => void;
  onPin: () => void;
}
export const TasksListHeader = ({
  list,
  onRemove,
  onPin,
}: TasksListHeaderProps) => {
  const remove = () => onRemove();

  return (
    <TasksListHeaderContainer>
      <PinButton
        isPinned={list.isPinned}
        className={style.PinButton}
        onClick={onPin}
      />
      <TasksListTitle>{list.title}</TasksListTitle>
      <RemoveButton className={style.RemoveButton} onClick={remove} />
    </TasksListHeaderContainer>
  );
};
