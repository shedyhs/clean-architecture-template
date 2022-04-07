import { BaseController } from '@/application/controllers/base-controller';
import { DeleteUserController } from '@/application/controllers/user/delete-user-controller';
import { DeleteUserUseCase } from '@/application/usecases/user/delete-user-usecase';
import { IDeleteUser } from '@/application/usecases/user/interfaces/delete-user-interface';
import { IUsersRepository } from '@/domain/contracts/user-repository-interface';
import { MemoryUsersRepository } from '@/infra/memory-users-repository';

export const makeDeleteUserController = (): BaseController => {
  const usersRepository: IUsersRepository = MemoryUsersRepository.getInstance();
  const deleteUserUseCase: IDeleteUser = new DeleteUserUseCase(usersRepository);
  return new DeleteUserController(deleteUserUseCase);
};
