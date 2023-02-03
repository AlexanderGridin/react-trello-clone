import { useState } from "react";

export const useAddItemFormState = () => {
  const [text, setText] = useState("");

  return {
    text: {
      value: text,
      set: setText,
    },
  };
};
