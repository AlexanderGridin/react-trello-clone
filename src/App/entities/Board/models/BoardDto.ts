import { UserDto } from "App/entities/User/models";
import { BoardViewModel } from "./BoardViewModel";

export class BoardDto {
  public _id = "";
  public title = "";
  public isFavorite = false;
  public rank = -1;
  public user: UserDto = new UserDto();

  static toViewModel(source: BoardDto): BoardViewModel {
    return {
      id: source._id,
      title: source.title,
      isFavorite: source.isFavorite,
      rank: source.rank,
      user: UserDto.toViewModel(source.user),
      isEditing: false,
    };
  }
}
