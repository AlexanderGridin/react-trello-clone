import { createBrowserRouter } from "react-router-dom";

import { AppRoot } from "App/components/AppRoot";
import { PageGuard } from "App/components/PageGuard";
import { BoardPage } from "App/pages/BoardPage";
import { IndexPage } from "App/pages/IndexPage";
import { UsersPage } from "App/pages/UsersPage";
import { BoardsPage } from "App/pages/BoardsPage";
import { ErrorHandler } from "App/components/ErrorHandler";

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
