import { routes } from "App/api/Boards/routes";

export const boardsResponseMap = {
  [routes.getAllBoards]: [
    {
      _id: 1,
      title: "Board 1",
      isFavorite: false,
      rank: 1,
    },
    {
      _id: 2,
      title: "Board 2",
      isFavorite: true,
      rank: 2,
    },
  ],

  [routes.getFavoriteBoards]: [
    {
      _id: 2,
      title: "Mock favorite board",
      isFavorite: true,
      rank: 2,
    },
  ],
};
