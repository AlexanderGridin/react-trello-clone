import { UserViewModel } from "./UserViewModel";

export class AuthenticatedUserDto {
  public _id!: string;
  public name!: string;
  public accessToken!: string;

  static toViewModel(source: AuthenticatedUserDto): UserViewModel {
    return {
      id: source._id,
      name: source.name,
      isLoggedIn: true,
    };
  }
}
