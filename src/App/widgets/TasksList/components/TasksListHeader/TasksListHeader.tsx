import { PinButton } from "App/components/PinButton/PinButton";
import { RemoveButton } from "App/components/RemoveButton/RemoveButton";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { TasksListHeaderContainer } from "./components/TasksListHeaderContainer";
import { TasksListTitle } from "./components/TasksListTitle";
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

  return (
    <TasksListHeaderContainer>
      <PinButton isPinned={list.isPinned} onClick={onPin} />
      <TasksListTitle className={style.Title}>{list.title}</TasksListTitle>
      <RemoveButton className={style.RemoveButton} onClick={remove} />
    </TasksListHeaderContainer>
  );
};
