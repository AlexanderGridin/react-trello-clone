import { IBoardUpdateDto } from "entities/Board/models";

export class BoardFormValue {
  public title = "";
  public isFavorite = false;

  static toUpdateDto(source: BoardFormValue): IBoardUpdateDto {
    return {
      title: source.title,
      isFavorite: source.isFavorite,
    };
  }
}
