import { TypedUseSelectorHook, useSelector as nonTypedUseSelector } from "react-redux";
import { TRootState } from "..";

export const useSelector: TypedUseSelectorHook<TRootState> = nonTypedUseSelector;
