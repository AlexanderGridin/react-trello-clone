import { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "..";
import { UserViewModel } from "../../models";

interface Payload {
  user: UserViewModel | null;
}

export const setUserReducer = (state: UserState, action: PayloadAction<Payload>) => {
  state.user = action.payload.user;
};
