import { useAppState } from "state/hooks/useAppState";
import { mapToCardsListItems } from "../mappers/mapToCardsListItems";
import { TasksListModel } from "../models/TasksListModel";

export const useTasksListItems = (list: TasksListModel) => {
  const { getTasksByListId } = useAppState();
  return mapToCardsListItems(getTasksByListId(list.id));
};
