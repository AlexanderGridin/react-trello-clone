import { AppRoot } from "App/components/AppRoot/AppRoot";
import { BoardPage } from "App/pages/BoardPage/BoardPage";
import { BoardsPage } from "App/pages/BoardsPage/BoardsPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    children: [
      { index: true, element: <BoardsPage /> },
      {
        path: "board/:id",
        element: <BoardPage />,
      },
    ],
  },
]);
