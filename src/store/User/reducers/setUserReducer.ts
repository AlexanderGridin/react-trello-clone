import { PayloadAction } from "@reduxjs/toolkit";

import { UserViewModel } from "entities/User/models";

import { IUserState } from "..";

interface Payload {
  user: UserViewModel | null;
}

export const setUserReducer = (state: IUserState, action: PayloadAction<Payload>) => {
  state.user = action.payload.user;
};
