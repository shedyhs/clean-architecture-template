import { IUsersRepository } from '@/domain/contracts/user-repository-interface';
import { User } from '@/domain/entities/user/user';

export class MemoryUsersRepository implements IUsersRepository {
  users: User[] = [];

  async create(user: User): Promise<void> {
    console.log('password: ', user.password);
    this.users.push(user);
  }

  async findById(id: string): Promise<User | undefined> {
    const foundUser = this.users.find((user) => user.id === id);
    if (!foundUser) {
      return undefined;
    }
    return foundUser;
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
