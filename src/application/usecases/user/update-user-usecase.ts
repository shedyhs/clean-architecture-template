import { UserMapper } from '@/application/mappers/user-mapper';
import { IUsersRepository } from '@/domain/contracts/user-repository-interface';
import { ApplicationErrors } from '@/shared/application/application-error';
import { IUpdateUserDTO } from './dtos/update-user-dto';
import { IOutputUserDTO } from './dtos/output-user-dto';
import { IUpdateUser } from './interfaces/update-user-interface';

export class UpdateUserUseCase implements IUpdateUser {
  constructor(private readonly usersRepository: IUsersRepository) {}
  async execute(id: string, input: IUpdateUserDTO): Promise<IOutputUserDTO> {
    const foundUser = await this.usersRepository.findById(id);
    if (!foundUser) {
      throw new ApplicationErrors.NotFoundError('User not found');
    }
    foundUser.email = input.email ?? foundUser.email;
    foundUser.name = input.name ?? foundUser.name;
    foundUser.password = input.password ?? foundUser.password;
    await this.usersRepository.update(foundUser);
    console.log('User updated');
    return UserMapper.toOutput(foundUser);
  }
}
