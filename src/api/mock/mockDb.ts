// TODO: add types
const db: { boards: any[]; user: any | null } = {
  boards: [],
  user: null,
};

export const connectToMockDb = () => {
  return {
    user: {
      get: () => db.user,
      set: (user: any) => (db.user = user),
    },
    boards: {
      getAll: () => db.boards,
      getFavorite: () => db.boards.filter(({ isFavorite }: any) => isFavorite),
      getById: (id: string) => db.boards.find(({ _id }: any) => _id === id),
      push: (board: any) => (db.boards = [...db.boards, board]),
      update: (board: any) =>
        (db.boards = db.boards.map((dbBoard: any) => {
          if (dbBoard._id !== board._id) {
            return { ...dbBoard };
          }

          return {
            ...dbBoard,
            ...board,
          };
        })),
      delete: (board: any) => (db.boards = db.boards.filter(({ _id }: any) => _id !== board._id)),
    },

    tasksLists: {
      getById: (listId: string) => {
        const lists = db.boards.reduce((acc: any[], board: any) => acc.concat(board.tasksLists), []);
        return lists.find(({ _id }: any) => _id === listId);
      },
      push: (list: any) =>
        (db.boards = db.boards.map((board: any) => {
          if (board._id !== list.boardId) {
            return { ...board };
          }

          return {
            ...board,
            tasksLists: board.tasksLists ? [...board.tasksLists, list] : [list],
          };
        })),
      update: (list: any) =>
        (db.boards = db.boards.map((board: any) => {
          if (board._id !== list.boardId) {
            return { ...board };
          }

          return {
            ...board,
            tasksLists: board.tasksLists.map((dbList: any) => {
              if (dbList._id !== list._id) {
                return { ...dbList };
              }

              return {
                ...dbList,
                ...list,
              };
            }),
          };
        })),
      delete: (list: any) =>
        (db.boards = db.boards.map((board: any) => {
          if (board._id !== list.boardId) {
            return { ...board };
          }

          return {
            ...board,
            tasksLists: board.tasksLists.filter(({ _id }: any) => _id !== list._id),
          };
        })),
    },

    tasks: {
      getById: (id: string) => {
        const lists = db.boards.reduce((acc: any[], board: any) => acc.concat(board.tasksLists), []);
        const tasks = lists.reduce((acc: any[], list: any) => acc.concat(list.tasks), []);
        return tasks.find(({ _id }: any) => _id === id);
      },
      push: (task: any) =>
        (db.boards = db.boards.map((board: any) => {
          if (board._id !== task.boardId) {
            return { ...board };
          }

          return {
            ...board,
            tasksLists: board.tasksLists.map((dbList: any) => {
              if (dbList._id !== task.listId) {
                return { ...dbList };
              }

              return {
                ...dbList,
                tasks: dbList.tasks ? [...dbList.tasks, task] : [task],
              };
            }),
          };
        })),
      update: (task: any) =>
        (db.boards = db.boards.map((board: any) => {
          if (board._id !== task.boardId) {
            return { ...board };
          }

          return {
            ...board,
            tasksLists: board.tasksLists.map((dbList: any) => {
              if (dbList._id !== task.listId) {
                return { ...dbList };
              }

              return {
                ...dbList,
                tasks: dbList.tasks.map((dbTask: any) => {
                  if (dbTask._id !== task._id) {
                    return { ...dbTask };
                  }

                  return {
                    ...dbTask,
                    ...task,
                  };
                }),
              };
            }),
          };
        })),
      delete: (task: any) =>
        (db.boards = db.boards.map((board: any) => {
          if (board._id !== task.boardId) {
            return { ...board };
          }

          return {
            ...board,
            tasksLists: board.tasksLists.map((dbList: any) => {
              if (dbList._id !== task.listId) {
                return { ...dbList };
              }

              return {
                ...dbList,
                tasks: dbList.tasks.filter(({ _id }: any) => _id !== task._id),
              };
            }),
          };
        })),
    },
  };
};
