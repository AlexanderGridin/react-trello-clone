export class Cache<D> {
  private readonly _data: Record<string, D> = {};

  public add = (key: string, value: D) => {
    this._data[key] = value;
  };

  public clear() {
    Object.keys(this._data).forEach((key) => delete this._data[key]);
  }

  public get data() {
    return this._data;
  }

  public get value() {
    return Object.values(this._data);
  }

  public log() {
    console.log(this._data);
  }
}
