import { useState } from "react";
import { ComponentStateProp } from "shared/models/ComponentStateProp";

export interface AddBoardFormState {
  content: ComponentStateProp<string>;
}

export const useAddBoardFormState = () => {
  const [content, setContent] = useState("");

  return {
    content: {
      value: content,
      set: setContent,
    },
  };
};
