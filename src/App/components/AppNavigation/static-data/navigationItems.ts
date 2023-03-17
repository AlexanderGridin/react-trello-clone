import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";
import { INavigationItem } from "../models";

export const navigationItems: INavigationItem[] = [
  {
    to: "/boards",
    icon: MaterialIcon.Boards,
    text: "Boards",
  },
  {
    to: "/users",
    icon: MaterialIcon.Group,
    text: "Users",
  },
];
