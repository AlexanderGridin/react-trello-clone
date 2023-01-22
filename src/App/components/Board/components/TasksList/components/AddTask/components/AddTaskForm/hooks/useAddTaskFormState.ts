import { useState } from "react";
import { ComponentStateProp } from "shared/models/ComponentStateProp";

export interface AddTaskFormState {
  content: ComponentStateProp<string>;
}

export const useAddTaskFormState = () => {
  const [content, setContent] = useState("");

  return {
    content: {
      value: content,
      set: setContent,
    },
  };
};
