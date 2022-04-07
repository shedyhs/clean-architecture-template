import { IUpdateUserDTO } from '../dtos/update-user-dto';
import { IOutputUserDTO } from '../dtos/output-user-dto';

export interface IUpdateUser {
  execute(id: string, input: IUpdateUserDTO): Promise<IOutputUserDTO>;
}
