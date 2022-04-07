import { IUsersRepository } from '@/domain/contracts/user-repository-interface';
import { ApplicationErrors } from '@/shared/application/application-error';
import { IDeleteUser } from './interfaces/delete-user-interface';

export class DeleteUserUseCase implements IDeleteUser {
  constructor(private readonly usersRepository: IUsersRepository) {}
  async execute(id: string): Promise<void> {
    const foundUser = await this.usersRepository.findById(id);
    if (!foundUser) {
      throw new ApplicationErrors.NotFoundError('User not found');
    }
    await this.usersRepository.delete(foundUser.id);
    console.log('User deleted');
  }
}
