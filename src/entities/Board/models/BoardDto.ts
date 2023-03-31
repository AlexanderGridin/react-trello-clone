import { UserDto } from "entities/User/models";

import { BoardViewModel } from "./BoardViewModel";

export class BoardDto {
  public _id!: string;
  public title!: string;
  public isFavorite = false;
  public rank!: number;
  public user!: UserDto;

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
