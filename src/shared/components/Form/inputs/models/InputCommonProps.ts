import { ChangeEvent } from "react";

export interface InputCommonProps {
  id: string;
  name: string;
  value: string;
  label?: string;
  error?: string;
  placeholder?: string;
  isAutoFocus?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // TODO: for temporary purposes
  onBlur?: (e: any) => void;
}
