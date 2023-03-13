export interface IBoardCreateDtoConfig {
  title: string;
  isFavorite: boolean;
  // TODO: remove this. Rank need to be setted on the API side
  rank: number;
  user: string;
}

export class BoardCreateDto {
  public title!: string;
  public isFavorite = false;
  // TODO: remove this. Rank need to be setted on the API side
  public rank!: number;
  public user!: string;

  constructor(config?: IBoardCreateDtoConfig) {
    if (!config) {
      return;
    }

    Object.assign(this, config);
  }
}
