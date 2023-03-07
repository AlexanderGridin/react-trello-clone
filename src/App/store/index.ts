import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { boardsReducer } from "App/store/BoardsPage";
import { userReducer } from "App/store/User";

const reducer = combineReducers({
  user: userReducer,
  boards: boardsReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
