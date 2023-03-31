export interface IUserCreateDtoConfig {
  name: string;
  password: string;
}

export class UserCreateDto {
  public name: string;
  public password: string;

  constructor({ name, password }: IUserCreateDtoConfig) {
    this.name = name;
    this.password = password;
  }
}
