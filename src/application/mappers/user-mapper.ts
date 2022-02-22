import { User as EntityUser } from '../../domain/entities/user/user';
import { IOutputUserDTO } from '../usecases/user/dtos/output-user-dto';

export class UserMapper {
  public static toOutput(user: EntityUser): IOutputUserDTO {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };
  }

  public static toRepository(user: EntityUser) {
    return new EntityUser({
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
    });
  }
}
