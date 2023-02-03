import { useState } from "react";
import { ComponentStateProp } from "shared/models/ComponentStateProp";

export interface AddTasksListState {
  isShowForm: ComponentStateProp<boolean>;
}

export const useAddTasksListState = (): AddTasksListState => {
  const [isShowForm, setIsShowForm] = useState(false);

  return {
    isShowForm: {
      value: isShowForm,
      set: setIsShowForm,
    },
  };
};
