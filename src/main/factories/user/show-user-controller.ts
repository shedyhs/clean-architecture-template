import { BaseController } from '../../../application/controllers/base-controller';
import { ShowUserController } from '../../../application/controllers/user/show-user-controller';
import { ShowUserUseCase } from '../../../application/usecases/user/show-user-usecase';
import { IUserRepository } from '../../../domain/contracts/user-repository-interface';
import { MemoryUsersRepository } from '../../../infra/users-repository';

export const makeShowUserController = (): BaseController => {
  const usersRepository: IUserRepository = new MemoryUsersRepository();
  const showUserUseCase = new ShowUserUseCase(usersRepository);
  return new ShowUserController(showUserUseCase);
};
