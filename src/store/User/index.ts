import { createSlice } from "@reduxjs/toolkit";

import { UserViewModel } from "entities/User/models";

import { setUserReducer } from "./reducers";

export interface IUserState {
  user: UserViewModel | null;
}

const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
  name: "[USER]",
  initialState,
  reducers: {
    setUser: setUserReducer,
  },
});

export const { setUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
