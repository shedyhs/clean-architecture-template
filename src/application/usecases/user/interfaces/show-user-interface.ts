import { IOutputUserDTO } from '../dtos/output-user-dto';

export interface IShowUser {
  execute(id: string): Promise<IOutputUserDTO>;
}
