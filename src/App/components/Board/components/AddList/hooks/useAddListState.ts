import { useState } from "react";
import { ComponentStateProp } from "shared/models/ComponentStateProp";

export interface AddListState {
  isShowForm: ComponentStateProp<boolean>;
}

export const useAddListState = (): AddListState => {
  const [isShowForm, setIsShowForm] = useState(false);

  return {
    isShowForm: {
      value: isShowForm,
      set: setIsShowForm,
    },
  };
};
