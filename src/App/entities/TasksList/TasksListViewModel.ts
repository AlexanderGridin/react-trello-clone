import { generateId } from "shared/utils/generateId";
import { TaskViewModel } from "App/entities/Task/TaskViewModel";

interface TasksListViewModelConfig {
  id?: string;
  title?: string;
  boardId?: string;
  tasks?: TaskViewModel[];
}

export class TasksListViewModel {
  public readonly id: string;

  public title: string;
  public boardId: string;
  public tasks: TaskViewModel[];
  public isPinned = false;
	public isEditing = false;

  constructor({ id = generateId(), title = "", boardId = "", tasks = [] }: TasksListViewModelConfig) {
    this.id = id;
    this.title = title;
    this.boardId = boardId;
    this.tasks = tasks;
  }
}
