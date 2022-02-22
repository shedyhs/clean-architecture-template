import { BaseController } from '../../../application/controllers/base-controller';
import { CreateUserController } from '../../../application/controllers/user/create-user-controller';
import { CreateUserUseCase } from '../../../application/usecases/user/create-user-usecase';
import { IUserRepository } from '../../../domain/contracts/user-repository-interface';
import { MemoryUsersRepository } from '../../../infra/users-repository';

export const makeCreateUserController = (): BaseController => {
  const usersRepository: IUserRepository = new MemoryUsersRepository();
  const createUserUseCase = new CreateUserUseCase(usersRepository);
  return new CreateUserController(createUserUseCase);
};
