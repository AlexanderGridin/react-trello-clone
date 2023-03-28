import { TPriority } from "App/types";
import { TaskFormValue } from "App/widgets/tasks/TaskForm/models";
import { TAppDraggedItem } from "App/entities/AppDraggedItem/types";
import { DraggedItemType } from "drag-and-drop/enums";

import { ITaskUpdateManyDto } from ".";

export class TaskViewModel {
  public readonly id!: string;

  public listId!: string;
  public boardId!: string;
  public title!: string;
  public isEditing = false;
  public priority: TPriority = "regular";
  public user!: { id: string; name: string };
  public rank!: number;

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

  static toUpdateManyDto(source: TaskViewModel): ITaskUpdateManyDto {
    return {
      id: source.id,
      rank: source.rank,
      listId: source.listId,
    };
  }
}
