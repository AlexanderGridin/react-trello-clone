import { PayloadAction } from "@reduxjs/toolkit";
import { UserViewModel } from "App/entities/User/models";
import { UserState } from "..";

interface Payload {
  user: UserViewModel | null;
}

export const setUserReducer = (state: UserState, action: PayloadAction<Payload>) => {
  state.user = action.payload.user;
};
