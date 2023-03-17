import { MaterialIcon } from "shared/components/Icon/enums/MaterialIcon";

export interface INavigationItem {
  to: string;
  icon: MaterialIcon;
  text: string;
}
