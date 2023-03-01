export class BoardViewModel {
  public id = "";
  public title: string;
  public isFavorite = false;
  public isEditing = false;
  public rank = 0;

  constructor({ title = "" }: { title?: string }) {
    this.title = title;
  }
}
