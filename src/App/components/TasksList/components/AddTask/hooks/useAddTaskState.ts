import { useState } from "react";
import { ComponentStateProp } from "shared/models/ComponentStateProp";

export interface AddTaskState {
  isShowForm: ComponentStateProp<boolean>;
}

export const useAddTaskState = () => {
  const [isShowForm, setIsShowForm] = useState(false);

  return {
    isShowForm: {
      value: isShowForm,
      set: setIsShowForm,
    },
  };
};
