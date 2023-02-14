export const boardsRoutes: Record<string, string> = {
  getBoard: "/board/{$boardId}",
  removeBoard: "/board/{$boardId}",
  getAllBoards: "/boards",
  getFavoriteBoards: "/boards/favorite",
  addBoard: "/board",
};
