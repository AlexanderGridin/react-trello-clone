export interface IBoardCreateDtoConfig {
  title: string;
  isFavorite: boolean;
}

export class BoardCreateDto {
  public title!: string;
  public isFavorite = false;

  constructor(config?: IBoardCreateDtoConfig) {
    if (!config) {
      return;
    }

    Object.assign(this, config);
  }
}
