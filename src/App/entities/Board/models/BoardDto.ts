export interface BoardDto {
  _id: string;
  title: string;
  isFavorite: boolean;
  rank: number;
  user: {
    _id: string;
    name: string;
  };
}
