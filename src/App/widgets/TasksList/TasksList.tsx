import { DndCard } from "App/components/DndCard/DndCard";
import { mapTasksListToDraggedItem } from "App/entities/TasksList/mappers/mapTasksListToDraggedItem";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { Card } from "shared/components/Card/Card";
import { AddTask } from "../AddTask/AddTask";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";
import { TasksListItems } from "./components/TasksListItems/TasksListItems";
import { useTasksListFeatures } from "./hooks/useTasksListFeatures";

export interface TasksListProps {
  list: TasksListViewModel;
  isDragPreview?: boolean;
}

export const TasksList = ({ list, isDragPreview = false }: TasksListProps) => {
  const { remove, togglePin, addTask, dropOnList } = useTasksListFeatures(list);

  const BACKGROUD_COLOR = "#D8DEE9";

  const header = (
    <TasksListHeader list={list} onRemove={remove} onPin={togglePin} />
  );
  const content = <TasksListItems tasks={list.tasks} />;
  const footer = <AddTask onAdd={addTask} />;

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
