import { DraggedItemType } from "App/enums/DraggedItemType";
import { AppDraggedItem } from "App/entities/AppDraggedItem/AppDraggedItem";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";
import { TasksListViewModel } from "App/entities/TasksList/TasksListViewModel";
import { useTaskDispatchers } from "App/entities/Task/state/hooks/useTaskDispatchers";
import { useTasksListDispatchers } from "App/entities/TasksList/state/hooks/useTasksListDispatchers";
import { useAppDraggedItemDispatchers } from "App/entities/AppDraggedItem/state/hooks/useAppDraggedItemDispatchers";

export const useTasksListFeatures = (list: TasksListViewModel) => {
  const {
    dispatchRemoveTasksList,
    dispatchMoveTasksList,
    dispatchPushTaskInTasksList,
    dispatchPinTasksList,
    dispatchUnpinTasksList,
  } = useTasksListDispatchers();

  const { dispatchAddTask, dispatchRemoveTask } = useTaskDispatchers();

  const { dispatchSetAppDraggedItem } = useAppDraggedItemDispatchers();

  const remove = () => dispatchRemoveTasksList(list);

  const togglePin = () =>
    list.isPinned
      ? dispatchUnpinTasksList({ ...list, isPinned: false })
      : dispatchPinTasksList({ ...list, isPinned: true });

  const addTask = (task: TaskViewModel) =>
    dispatchAddTask({ ...task, listId: list.id, boardId: list.boardId });

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
    dispatchSetAppDraggedItem({
      ...draggedItem,
      data: {
        ...draggedItem.data,
        listId: list.id,
      },
    });
  };

  return { remove, togglePin, addTask, dropOnList };
};
