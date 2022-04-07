import { BaseController } from '@/application/controllers/base-controller';
import { CreateUserController } from '@/application/controllers/user/create-user-controller';
import { CreateUserUseCase } from '@/application/usecases/user/create-user-usecase';
import { ICreateUser } from '@/application/usecases/user/interfaces/create-user-interface';
import { IUsersRepository } from '@/domain/contracts/user-repository-interface';
import { MemoryUsersRepository } from '@/infra/memory-users-repository';

export const makeCreateUserController = (): BaseController => {
  const usersRepository: IUsersRepository = MemoryUsersRepository.getInstance();
  const createUserUseCase: ICreateUser = new CreateUserUseCase(usersRepository);
  return new CreateUserController(createUserUseCase);
};
