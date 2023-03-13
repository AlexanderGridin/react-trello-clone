import { IBoardUpdateDto } from "App/entities/Board/models";

export class BoardFormValue {
  public title!: string;
  public isFavorite = false;

  static toUpdateDto(source: BoardFormValue): IBoardUpdateDto {
    return {
      title: source.title,
      isFavorite: source.isFavorite,
    };
  }
}
