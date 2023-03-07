import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userReducer } from "App/entities/User/store";

const reducer = combineReducers({
  user: userReducer,
});

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
