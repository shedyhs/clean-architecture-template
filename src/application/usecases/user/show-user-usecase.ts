import { UserMapper } from '@/application/mappers/user-mapper';
import { IUsersRepository } from '@/domain/contracts/user-repository-interface';
import { ApplicationErrors } from '@/shared/application/application-error';

import { IOutputUserDTO } from './dtos/output-user-dto';
import { IShowUser } from './interfaces/show-user-interface';

export class ShowUserUseCase implements IShowUser {
  constructor(private readonly usersRepository: IUsersRepository) {}
  async execute(id: string): Promise<IOutputUserDTO> {
    const foundUser = await this.usersRepository.findById(id);
    if (!foundUser) {
      throw new ApplicationErrors.NotFoundError('User not found');
    }
    return UserMapper.toOutput(foundUser);
  }
}
