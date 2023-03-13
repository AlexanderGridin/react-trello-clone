import { TAppDraggedItem } from "App/entities/AppDraggedItem/models";
import { TaskViewModel } from "App/entities/Task/models";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { TasksListFormValue } from "App/widgets/tasks-lists/TasksListForm/models";

interface ITasksListViewModelConfig {
  id: string;
  title: string;
  boardId: string;
  tasks: TaskViewModel[];
}

export class TasksListViewModel {
  public readonly id!: string;

  public title!: string;
  public boardId!: string;
  public tasks!: TaskViewModel[];
  public isPinned = false;
  public isEditing = false;

  constructor(config?: ITasksListViewModelConfig) {
    if (!config) {
      return;
    }

    Object.assign(this, config);
  }

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
}
