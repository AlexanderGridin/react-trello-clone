import { ITableItem } from "shared/models";
import { UserViewModel } from "./UserViewModel";

export class UserTableItem extends UserViewModel implements ITableItem {
  public actions = false;
}
