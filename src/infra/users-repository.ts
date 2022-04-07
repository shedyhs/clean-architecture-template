import { UserMapper } from '../application/mappers/user-mapper';
import { IUserRepository } from '../domain/contracts/user-repository-interface';
import { User } from '../domain/entities/user/user';

export class MemoryUsersRepository implements IUserRepository {
  private users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(UserMapper.toRepository(user));
  }

  async findById(id: string): Promise<User | undefined> {
    console.log(this.users);
    return this.users.find((user) => user.id === id);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const foundUser = this.users.find((user) => user.email === email);
    if (!foundUser) {
      return undefined;
    }
    return foundUser;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async update(user: User): Promise<void> {
    this.users = this.users.filter((foundUser) => foundUser.id !== user.id);
    this.users.push(user);
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter((foundUser) => foundUser.id !== id);
  }
}
