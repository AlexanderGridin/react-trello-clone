export interface IUserLoginDtoConfig {
  name: string;
  password: string;
}

export class UserLoginDto {
  public name: string;
  public password: string;

  constructor({ name, password }: IUserLoginDtoConfig) {
    this.name = name;
    this.password = password;
  }
}
