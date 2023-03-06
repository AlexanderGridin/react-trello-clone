import { TaskFormValue } from "App/widgets/tasks/TaskForm/models";
import { TaskViewModel } from "../models";

export const mapTaskViewModelToFormValue = (source: TaskViewModel): TaskFormValue => ({
  title: source.content,
  priority: source.priority,
});
