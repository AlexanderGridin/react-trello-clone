import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { boardsReducer } from "App/entities/Board/store";
import { userReducer } from "App/entities/User/store";

const reducer = combineReducers({
  user: userReducer,
  boards: boardsReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
