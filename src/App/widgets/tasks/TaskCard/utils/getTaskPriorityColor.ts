import { TPriority } from "App/types";

export const getTaskPriorityColor = (priority: TPriority): string => {
  switch (priority) {
    case "regular":
      return "#ECEFF4";

    case "medium":
      return "#D08770";

    case "height":
      return "#BF616A";

    case "low":
      return "#EBCB8B";

    default:
      return "#ECEFF4";
  }
};
