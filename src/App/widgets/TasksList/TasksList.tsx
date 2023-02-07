import { DndCard } from "App/components/DndCard/DndCard";
import { mapTasksListToDraggedItem } from "App/entities/TasksList/mappers/mapTasksListToDraggedItem";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { Card } from "shared/components/Card/Card";
import { ListOfTasks } from "../ListOfTasks/ListOfTasks";
import { TasksListHeader } from "./components/TasksListHeader/TasksListHeader";
import { useTasksListFeatures } from "./hooks/useTasksListFeatures";

export interface TasksListProps {
  list: TasksListViewModel;
  isDragPreview?: boolean;
}

export const TasksList = ({ list, isDragPreview = false }: TasksListProps) => {
  const BACKGROUD_COLOR = "#D8DEE9";
  const { dropOnList } = useTasksListFeatures(list);

  const header = <TasksListHeader list={list} />;
  const content = (
    <ListOfTasks
      boardId={list.boardId}
      listId={list.id}
      tasks={list.tasks}
      isShowAddTask
    />
  );

  if (isDragPreview) {
    return (
      <Card
        slotHeader={header}
        slotContent={content}
        backgroundColor={BACKGROUD_COLOR}
        className="drag-preview"
      />
    );
  }

  return (
    <DndCard
      slotHeader={header}
      slotContent={content}
      backgroundColor={BACKGROUD_COLOR}
      draggedItem={mapTasksListToDraggedItem(list)}
      onDrop={dropOnList}
    />
  );
};
