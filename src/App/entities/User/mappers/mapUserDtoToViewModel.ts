import { UserDto } from "../UserDto";
import { UserViewModel } from "../UserViewModel";

export const mapUserDtoToViewModel = (source: UserDto): UserViewModel => ({
  ...new UserViewModel(),
  id: source._id,
  userName: source.userName,
});
