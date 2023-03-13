import { TAppDraggedItem } from "App/entities/AppDraggedItem/models";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TPriority } from "App/types";
import { TaskFormValue } from "App/widgets/tasks/TaskForm/models";

export class TaskViewModel {
  public readonly id!: string;

  public listId!: string;
  public boardId!: string;
  public title!: string;
  public isEditing = false;
  public priority: TPriority = "regular";
  public user!: { id: string; name: string };

  static toAppDraggedItem(source: TaskViewModel): TAppDraggedItem {
    return {
      id: source.id,
      type: DraggedItemType.Task,
      acceptType: DraggedItemType.Task,
      data: { ...source },
    };
  }

  static toFormValue(source: TaskViewModel): TaskFormValue {
    return {
      title: source.title,
      priority: source.priority,
    };
  }
}
