import { TasksListFormValue } from "App/widgets/tasks-lists/TasksListForm/TasksListForm";
import { TasksListViewModel } from "../TasksListViewModel";

export const mapTasksListViewModelToFormValue = (source: TasksListViewModel): TasksListFormValue => ({
	title: source.title,
	isPinned: source.isPinned
})
