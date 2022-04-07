import { BaseController } from '@/application/controllers/base-controller';
import { ShowUserController } from '@/application/controllers/user/show-user-controller';
import { ShowUserUseCase } from '@/application/usecases/user/show-user-usecase';
import { IShowUser } from '@/application/usecases/user/interfaces/show-user-interface';
import { IUsersRepository } from '@/domain/contracts/user-repository-interface';
import { MemoryUsersRepository } from '@/infra/memory-users-repository';

export const makeShowUserController = (): BaseController => {
  const usersRepository: IUsersRepository = MemoryUsersRepository.getInstance();
  const showUserUseCase: IShowUser = new ShowUserUseCase(usersRepository);
  return new ShowUserController(showUserUseCase);
};
