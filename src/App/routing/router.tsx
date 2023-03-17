import { createBrowserRouter } from "react-router-dom";

import { AppRoot } from "App/components/AppRoot";
import { BoardPage } from "App/pages/BoardPage/BoardPage";
import { BoardsPage } from "App/pages/BoardsPage/BoardsPage";
import { IndexPage } from "App/pages/IndexPage/IndexPage";
import { ErrorHandler } from "App/components/ErrorHandler";
import { PageGuard } from "App/components/PageGuard";
import { UsersPage } from "App/pages/UsersPage/UsersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppRoot />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: "boards",
        element: (
          <PageGuard>
            <BoardsPage />
          </PageGuard>
        ),
      },
      {
        path: "board/:id",
        element: (
          <PageGuard>
            <BoardPage />
          </PageGuard>
        ),
      },
      {
        path: "users",
        element: (
          <PageGuard>
            <UsersPage />
          </PageGuard>
        ),
      },
    ],
  },
]);
