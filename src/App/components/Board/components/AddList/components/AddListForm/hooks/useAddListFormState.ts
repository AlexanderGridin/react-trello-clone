import { useState } from "react";
import { ComponentStateProp } from "shared/models/ComponentStateProp";

export interface AddListFormState {
  title: ComponentStateProp<string>;
}

export const useAddListFormState = (): AddListFormState => {
  const [title, setTitle] = useState("");

  return {
    title: {
      value: title,
      set: setTitle,
    },
  };
};
