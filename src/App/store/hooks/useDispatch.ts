import { useDispatch as nonTypedUseDispatch } from "react-redux";
import { TAppDispatch } from "..";

export const useDispatch: () => TAppDispatch = nonTypedUseDispatch;
