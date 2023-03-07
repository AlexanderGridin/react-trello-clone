import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { boardsPageReducer } from "App/store/BoardsPage";
import { userReducer } from "App/store/User";
import { boardPageReducer } from "App/store/BoardPage";

const reducer = combineReducers({
  user: userReducer,
  boardsPage: boardsPageReducer,
  boardPage: boardPageReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
