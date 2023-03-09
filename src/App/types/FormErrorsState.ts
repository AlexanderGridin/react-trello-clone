import { ReactNode } from "react";

export type FormErrorsState<FormValue> = Partial<Record<keyof FormValue, ReactNode>>;
