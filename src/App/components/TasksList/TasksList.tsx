import { Card } from "shared/components/Card/Card";
import { DndCard } from "../DndCard/DndCard";
import { AddTask } from "./components/AddTask/AddTask";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";
import { TasksListItems } from "./components/TasksListItems/TasksListItems";
import { useTasksListActions } from "./hooks/useTasksListActions";
import { mapTasksListToDraggedItem } from "./mappers/mapTasksListToDraggedItem";
import { TasksListModel } from "./models/TasksListModel";

export interface TasksListProps {
  list: TasksListModel;
  isDragPreview?: boolean;
}

export const TasksList = ({ list, isDragPreview = false }: TasksListProps) => {
  const { remove, addTask, dropOnList } = useTasksListActions(list);

  const BACKGROUD_COLOR = "#ebecf0";

  const header = <TasksListHeader onRemove={remove} list={list} />;
  const footer = <AddTask onAdd={addTask}>+ Add new task</AddTask>;

  if (isDragPreview) {
    return (
      <Card
        slotHeader={header}
        slotContent={
          <TasksListItems tasks={list.tasks} isDragPreview={isDragPreview} />
        }
        slotFooter={footer}
        backgroundColor={BACKGROUD_COLOR}
        className="drag-preview"
      />
    );
  }

  return (
    <DndCard
      slotHeader={header}
      slotContent={<TasksListItems tasks={list.tasks} />}
      slotFooter={footer}
      backgroundColor={BACKGROUD_COLOR}
      draggedItem={mapTasksListToDraggedItem(list)}
      onDrop={dropOnList}
    />
  );
};
