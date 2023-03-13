import { UserViewModel } from "./UserViewModel";

export class UserDto {
  public _id!: string;
  public name!: string;

  static toViewModel(source: UserDto): UserViewModel {
    return {
      id: source._id,
      name: source.name,
      isLoggedIn: true,
    };
  }
}
