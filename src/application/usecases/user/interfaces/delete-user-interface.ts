export interface IDeleteUser {
  execute(id: string): Promise<void>;
}
