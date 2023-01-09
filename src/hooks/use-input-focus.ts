import { RefObject, useEffect, useRef } from "react";

export const useInputFocus = (): RefObject<HTMLInputElement> => {
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
};
