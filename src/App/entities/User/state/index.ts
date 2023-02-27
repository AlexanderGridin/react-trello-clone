import { SetUserAction } from "./action-creators/createSetUserAction";

export * from "./hooks/useUserDispatcher";
export * from "./userReducer";

export type UserAction = SetUserAction;
export type UserModuleAction = { module: "User" } & UserAction;
