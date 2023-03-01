import { UserDto, UserViewModel } from "../models";

export const mapUserDtoToViewModel = (source: UserDto): UserViewModel => ({
  ...new UserViewModel(),
  id: source._id,
  name: source.name,
  isLoggedIn: true,
});
