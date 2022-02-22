import { ICreateUserDTO } from '../dtos/create-user-dto';
import { IOutputUserDTO } from '../dtos/output-user-dto';

export interface ICreateUser {
  execute(user: ICreateUserDTO): Promise<IOutputUserDTO>;
}
