import { ReactNode } from "react";

export type TFormErrorsState<FormValue> = Partial<Record<keyof FormValue, ReactNode>>;
