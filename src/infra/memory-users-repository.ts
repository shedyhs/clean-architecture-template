import { IUsersRepository } from '@/domain/contracts/user-repository-interface';
import { User } from '@/domain/entities/user/user';

export class MemoryUsersRepository implements IUsersRepository {
  users: User[] = [];
  // eslint-disable-next-line no-use-before-define
  private static instance: MemoryUsersRepository;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): MemoryUsersRepository {
    if (!MemoryUsersRepository.instance) {
      MemoryUsersRepository.instance = new MemoryUsersRepository();
    }
    return MemoryUsersRepository.instance;
  }

  async create(user: User): Promise<void> {
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
