import { useDispatch as nonTypedUseDispatch } from "react-redux";
import { AppDispatch } from "..";

export const useDispatch: () => AppDispatch = nonTypedUseDispatch;
