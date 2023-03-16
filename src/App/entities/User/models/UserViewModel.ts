import { UserTableItem } from "./UserTableItem";

export class UserViewModel {
  public readonly id!: string;

  public name!: string;
  public isLoggedIn = false;

  public static toTableItem(source: UserViewModel): UserTableItem {
    return {
      ...source,
      actions: true,
    };
  }
}
