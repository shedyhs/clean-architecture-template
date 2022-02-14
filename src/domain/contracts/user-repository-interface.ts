import { User } from '../entities/user/user';

export interface IUsersRepository {
  create(user: User): Promise<void>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  update(user: User): Promise<void>;
  delete(id: string): Promise<void>;
}
