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
  isShowAddTask?: boolean;
  isDragPreview?: boolean;
}

export const TasksList = ({
  list,
  isShowAddTask = false,
  isDragPreview = false,
}: TasksListProps) => {
  const BACKGROUD_COLOR = "#D8DEE9";
  const { addTask, dropOnList } = useTasksListFeatures(list);

  const header = <TasksListHeader list={list} />;
  const content = <TasksListItems tasks={list.tasks} />;
  const footer = isShowAddTask ? <AddTask onAdd={addTask} /> : null;

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
