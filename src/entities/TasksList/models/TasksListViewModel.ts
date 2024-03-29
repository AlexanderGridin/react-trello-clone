import { TaskViewModel } from "entities/Task/models";
import { TAppDraggedItem } from "entities/AppDraggedItem/types";
import { DraggedItemType } from "drag-and-drop/enums";
import { TasksListFormValue } from "App/widgets/tasks-lists/TasksListForm/models";

export class TasksListViewModel {
  public readonly id!: string;

  public title!: string;
  public boardId!: string;
  public rank!: number;

  public tasks: TaskViewModel[] = [];
  public isPinned = false;
  public isEditing = false;

  static toAppDraggedItem(source: TasksListViewModel): TAppDraggedItem {
    return {
      id: source.id,
      type: DraggedItemType.TasksList,
      acceptType: [DraggedItemType.Task, DraggedItemType.TasksList],
      data: { ...source },
    };
  }

  static toFromValue(source: TasksListViewModel): TasksListFormValue {
    return {
      title: source.title,
      isPinned: source.isPinned,
    };
  }

  static toUpdateManyDto(source: TasksListViewModel): any {
    return {
      id: source.id,
      rank: source.rank,
    };
  }
}
