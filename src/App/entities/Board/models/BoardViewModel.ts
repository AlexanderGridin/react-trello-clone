import { TAppDraggedItem } from "App/entities/AppDraggedItem/models";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { BoardFormValue } from "App/widgets/boards/BoardForm/models";
import { IBoardUpdateDto } from "./IBoardUpdateDto";
import { IBoardUpdateManyDto } from "./IBoardUpdateManyDto";

export class BoardViewModel {
  public readonly id!: string;

  public title!: string;
  public isFavorite = false;
  public isEditing = false;
  public rank!: number;
  public user!: { id: string; name: string };

  static toAppDraggedItem(source: BoardViewModel): TAppDraggedItem {
    return {
      id: source.id,
      type: DraggedItemType.Board,
      acceptType: DraggedItemType.Board,
      data: { ...source },
    };
  }

  static toFormValue(source: BoardViewModel): BoardFormValue {
    return {
      title: source.title,
      isFavorite: source.isFavorite,
    };
  }

  static toUpdateDto(source: BoardViewModel): IBoardUpdateDto {
    return {
      title: source.title,
      isFavorite: source.isFavorite,
    };
  }

  static toUpdateManyDto(source: BoardViewModel): IBoardUpdateManyDto {
    return {
      id: source.id,
      rank: source.rank,
    };
  }
}
