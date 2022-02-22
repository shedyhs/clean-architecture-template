import { IUserRepository } from '../../../domain/contracts/user-repository-interface';
import { User } from '../../../domain/entities/user/user';
import { ApplicationErrors } from '../../../shared/application/application-error';
import { UserMapper } from '../../mappers/user-mapper';
import { ICreateUserDTO } from './dtos/create-user-dto';
import { IOutputUserDTO } from './dtos/output-user-dto';
import { ICreateUser } from './interfaces/create-user-interface';

export class CreateUserUseCase implements ICreateUser {
  constructor(private readonly usersRepository: IUserRepository) {}
  async execute(input: ICreateUserDTO): Promise<IOutputUserDTO> {
    const emailAlreadyExists = await this.usersRepository.findByEmail(
      input.email,
    );
    if (emailAlreadyExists) {
      throw new ApplicationErrors.ConflictError('Email already exists');
    }

    const user = new User(input);
    await this.usersRepository.create(user);
    return UserMapper.toOutput(user);
  }
}
