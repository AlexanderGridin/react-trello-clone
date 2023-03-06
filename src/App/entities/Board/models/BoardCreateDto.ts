export interface BoardCreateDto {
  title: string;
  isFavorite: boolean;
  // TODO: remove this. Rank need to be setted on the API side
  rank: number;
  user: string;
}
