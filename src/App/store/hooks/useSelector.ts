import { TypedUseSelectorHook, useSelector as nonTypedUseSelector } from "react-redux";
import { RootState } from "..";

export const useSelector: TypedUseSelectorHook<RootState> = nonTypedUseSelector;
