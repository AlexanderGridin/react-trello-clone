import { DndCard } from "App/components/DndCard/DndCard";
import { mapTasksListToDraggedItem } from "App/entities/TasksList/mappers/mapTasksListToDraggedItem";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { Card } from "shared/components/Card/Card";
import { AddTask } from "./components/AddTask/AddTask";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";
import { TasksListItems } from "./components/TasksListItems/TasksListItems";
import { useTasksListFeatures } from "./hooks/useTasksListFeatures";

export interface TasksListProps {
  list: TasksListModel;
  isDragPreview?: boolean;
}

export const TasksList = ({ list, isDragPreview = false }: TasksListProps) => {
  const { remove, addTask, dropOnList } = useTasksListFeatures(list);

  const BACKGROUD_COLOR = "#ebecf0";

  const header = <TasksListHeader onRemove={remove} list={list} />;
  const content = <TasksListItems tasks={list.tasks} />;
  const footer = <AddTask onAdd={addTask}>+ Add new task</AddTask>;

  if (isDragPreview) {
    return (
      <Card
        slotHeader={header}
        slotContent={content}
        slotFooter={footer}
        backgroundColor={BACKGROUD_COLOR}
        className="drag-preview"
      />
    );
  }

  return (
    <DndCard
      slotHeader={header}
      slotContent={content}
      slotFooter={footer}
      backgroundColor={BACKGROUD_COLOR}
      draggedItem={mapTasksListToDraggedItem(list)}
      onDrop={dropOnList}
    />
  );
};
