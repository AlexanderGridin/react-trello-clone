import { createSlice } from "@reduxjs/toolkit";
import { UserViewModel } from "../models";
import { setUserReducer } from "./reducers";

export interface UserState {
  user: UserViewModel | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: setUserReducer,
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;

export * from "./hooks/useUserDispatcher";
export * from "./hooks/useSelectUser";
