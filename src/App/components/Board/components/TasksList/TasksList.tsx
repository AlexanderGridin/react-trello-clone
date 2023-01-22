import { CardsList } from "shared/components/CardsList/CardsList";
import { useTasksListActions } from "./hooks/useTasksListActions";
import { TasksListModel } from "./models/TasksListModel";
import { AddTask } from "./components/AddTask/AddTask";
import { useTasksListDragAndDrop } from "./hooks/useTasksListDragAndDrop";
import { mapToCardsList } from "./mappers/mapToCardsLits";
import { DragPreviewProps } from "drag-and-drop/models/DragPreviewProps";

interface TasksListProps extends DragPreviewProps {
  list: TasksListModel;
}

export const TasksList = ({
  list,
  isDragPreview = false,
}: TasksListProps): JSX.Element => {
  const { remove, removeTask, addTask } = useTasksListActions(list);
  const { dragAndDropRef, isDragging } = useTasksListDragAndDrop(list);

  const className = isDragging
    ? "dragging"
    : isDragPreview
    ? "drag-preview"
    : "";

  return (
    <CardsList
      ref={dragAndDropRef}
      list={mapToCardsList(list)}
      className={className}
      onRemove={remove}
      onRemoveCard={removeTask}
    >
      <AddTask onAdd={addTask}>+ Add new task</AddTask>
    </CardsList>
  );
};
