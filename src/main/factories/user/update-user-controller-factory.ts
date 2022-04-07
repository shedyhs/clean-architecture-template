import { BaseController } from '@/application/controllers/base-controller';
import { UpdateUserController } from '@/application/controllers/user/update-user-controller';
import { UpdateUserUseCase } from '@/application/usecases/user/update-user-usecase';
import { IUpdateUser } from '@/application/usecases/user/interfaces/update-user-interface';
import { IUsersRepository } from '@/domain/contracts/user-repository-interface';
import { MemoryUsersRepository } from '@/infra/memory-users-repository';

export const makeUpdateUserController = (): BaseController => {
  const usersRepository: IUsersRepository = MemoryUsersRepository.getInstance();
  const updateUserUseCase: IUpdateUser = new UpdateUserUseCase(usersRepository);
  return new UpdateUserController(updateUserUseCase);
};
