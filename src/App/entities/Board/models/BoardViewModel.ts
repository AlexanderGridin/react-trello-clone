import { TAppDraggedItem } from "App/entities/AppDraggedItem/models";
import { DraggedItemType } from "App/enums/DraggedItemType";
import { BoardFormValue } from "App/widgets/boards/BoardForm/models";
import { IBoardUpdateDto } from "./BoardUpdateDto";
import { IBoardUpdateManyDto } from "./BoardUpdateManyDto";

export interface IBoardViewModelConfig {
  title: string;
}

export class BoardViewModel {
  public id = "";
  public title = "";
  public isFavorite = false;
  public isEditing = false;
  public rank = 0;
  public user!: { id: string; name: string };

  constructor(config?: IBoardViewModelConfig) {
    if (!config) {
      return;
    }

    const { title = "" } = config;

    this.title = title;
  }

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
