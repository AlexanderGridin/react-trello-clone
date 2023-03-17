import { TAlertType } from "../types";

export const getCloseButtonColor = (type: TAlertType): string => {
  switch (type) {
    case "error":
      return "#bf616a";

    case "warning":
      return "#ef7918";

    case "success":
      return "#418944";

    default:
      return "#1893d5";
  }
};
