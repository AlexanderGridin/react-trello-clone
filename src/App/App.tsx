import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { store } from "App/store";
import { router } from "routing";
import { DragAndDropProvider } from "drag-and-drop/components/DragAndDropProvider";

export const App = () => (
  <DragAndDropProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </DragAndDropProvider>
);
