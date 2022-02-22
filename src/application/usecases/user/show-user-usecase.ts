import { IUserRepository } from '../../../domain/contracts/user-repository-interface';
import { ApplicationErrors } from '../../../shared/application/application-error';
import { UserMapper } from '../../mappers/user-mapper';
import { IOutputUserDTO } from './dtos/output-user-dto';
import { IShowUser } from './interfaces/show-user-interface';

export class ShowUserUseCase implements IShowUser {
  constructor(private readonly usersRepository: IUserRepository) {}

  async execute(id: string): Promise<IOutputUserDTO> {
    console.log('ShowUserUseCase - id :', id);
    const showUser = await this.usersRepository.findById(id);
    if (!showUser) {
      throw new ApplicationErrors.NotFoundError('User not found');
    }
    return UserMapper.toOutput(showUser);
  }
}
