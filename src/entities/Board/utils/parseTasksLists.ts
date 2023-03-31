export const parseTasksLists = <T extends { isPinned: boolean }>(source: T[]) => {
  const pinnedTasksLists: T[] = [];
  const unpinnedTasksLists: T[] = [];

  source.forEach((list: T) => {
    list.isPinned ? pinnedTasksLists.push(list) : unpinnedTasksLists.push(list);
  });

  return { pinnedTasksLists, unpinnedTasksLists };
};
