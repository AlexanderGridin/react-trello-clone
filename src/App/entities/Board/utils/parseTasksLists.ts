export const parseTasksLists = <T extends { isPinned: boolean }>(
  source: T[]
) => {
  const pinnedTasksLists: T[] = [];
  const tasksLists: T[] = [];

  source.forEach((list: T) => {
    list.isPinned ? pinnedTasksLists.push(list) : tasksLists.push(list);
  });

  return { pinnedTasksLists, tasksLists };
};
