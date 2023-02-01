import { useTasksListDispatchers } from "../state/hooks/useTasksListDispatchers";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { useDraggedItemDispatchers } from "App/state/shared/DraggedItem/hooks/useDraggedItemDispatchers";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListModel } from "App/entities/TasksList/TasksListModel";
import { useTaskDispatchers } from "App/widgets/Task/state/hooks/useTaskDispatchers";

export const useTasksListFeatures = (list: TasksListModel) => {
  const {
    dispatchRemoveTasksList,
    dispatchMoveTasksList,
    dispatchPushTaskInTasksList,
    dispatchPinTasksList,
    dispatchUnpinTasksList,
  } = useTasksListDispatchers();

  const { dispatchAddTask, dispatchRemoveTask } = useTaskDispatchers();

  const { dispatchSetDraggedItem } = useDraggedItemDispatchers();

  const remove = () => dispatchRemoveTasksList(list);

  const togglePin = () =>
    list.isPinned
      ? dispatchUnpinTasksList({ ...list, isPinned: false })
      : dispatchPinTasksList({ ...list, isPinned: true });

  const addTask = (content: string) =>
    dispatchAddTask(
      new TaskViewModel({ listId: list.id, boardId: list.boardId, content })
    );

  const dropOnList = (draggedItem: AppDraggedItem) => {
    if (
      draggedItem.type === DraggedItemType.TasksList &&
      draggedItem.data.isPinned === list.isPinned
    ) {
      dispatchMoveTasksList(draggedItem.data, list);
      return;
    }

    if (draggedItem.type !== DraggedItemType.Task || list.tasks.length) {
      return;
    }

    dispatchRemoveTask(draggedItem.data);
    dispatchPushTaskInTasksList(list, draggedItem.data);
    dispatchSetDraggedItem({
      ...draggedItem,
      data: {
        ...draggedItem.data,
        listId: list.id,
      },
    });
  };

  return { remove, togglePin, addTask, dropOnList };
};
