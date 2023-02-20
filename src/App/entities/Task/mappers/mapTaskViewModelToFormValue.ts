import { TaskFormValue } from "App/widgets/tasks/TaskForm/TaskForm";
import { TaskViewModel } from "../TaskViewModel";

export const mapTaskViewModelToFormValue = (source: TaskViewModel): TaskFormValue => ({
  title: source.content,
  priority: source.priority,
});
