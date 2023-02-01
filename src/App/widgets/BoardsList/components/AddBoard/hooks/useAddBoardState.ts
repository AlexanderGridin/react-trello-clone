import { useState } from "react";
import { ComponentStateProp } from "shared/models/ComponentStateProp";

export interface AddBoardState {
  isShowForm: ComponentStateProp<boolean>;
}

export const useAddBoardState = () => {
  const [isShowForm, setIsShowForm] = useState(false);

  return {
    isShowForm: {
      value: isShowForm,
      set: setIsShowForm,
    },
  };
};
