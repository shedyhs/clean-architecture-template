import { User } from '@/domain/entities/user/user';
import { IOutputUserDTO } from '../usecases/user/dtos/output-user-dto';

export class UserMapper {
  public static toOutput(user: User): IOutputUserDTO {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }
}
